console.log("[CEB] Content script (headless) loaded");

interface SearchResult {
  title: string;
  link: string;
  description: string;
  badgeInfo: {
    title: string;
    link: string;
  };
  status?: "safe" | "caution" | "danger" | "unknown" | "loading";
  reason?: string;
}

const analysisCache = new Map<
  string,
  { status: SearchResult["status"]; reason: string }
>();
const pendingFetches = new Set<string>();

const BADGE_HOST_CLASS = "recon-badge-host";

function cleanDescription(text: string): string {
  return text.replace(/^\d{4}\.\s*\d{1,2}\.\s*\d{1,2}\.\s*—\s*/, "");
}

async function analyzeSite(
  link: string,
): Promise<{ status: SearchResult["status"]; reason: string }> {
  try {
    const response = await fetch("http://localhost:3000/recon/site", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: link }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data: any = await response.json();

    // Convert array reason to string if necessary
    const reasonStr = Array.isArray(data.reason)
      ? data.reason.join(", ")
      : data.reason || "No specific reason provided";

    // Map 'degree' from server to 'status'
    let status: SearchResult["status"] = "unknown";
    if (data.degree === "safe") status = "safe";
    else if (data.degree === "caution") status = "caution";
    else if (data.degree === "danger") status = "danger";

    return {
      status: status,
      reason: reasonStr,
    };
  } catch (e) {
    console.error("Analysis failed:", e);
    return { status: "unknown", reason: "Analysis failed or server offline" };
  }
}

function collectSearchResults(): SearchResult[] {
  const results: SearchResult[] = [];
  const h3List = document.querySelectorAll("h3");

  h3List.forEach((h3) => {
    const anchor = h3.closest("a");
    if (!anchor) return;

    // Clone node to extract text without badge from content-ui
    const clone = h3.cloneNode(true) as HTMLElement;
    const badgeHost = clone.querySelector(`.${BADGE_HOST_CLASS}`);
    if (badgeHost) badgeHost.remove();

    const title = clone.innerText.trim();
    const link = anchor.href;

    if (!title || !link) return;

    const resultBlock =
      h3.closest("div[jscontroller]") || h3.closest("div[data-snhf]");
    if (!resultBlock) return;

    const descriptionEl =
      resultBlock.querySelector("div.VwiC3b") ||
      resultBlock.querySelector("span.VwiC3b") ||
      resultBlock.querySelector("div[role='heading'] ~ div") ||
      null;

    const rawDescription = descriptionEl
      ? (descriptionEl as HTMLElement).innerText.trim()
      : "";
    const description = cleanDescription(rawDescription);

    // Initial state from cache or default
    let status: SearchResult["status"] = "loading";
    let reason = "Analyzing...";

    if (analysisCache.has(link)) {
      const cached = analysisCache.get(link)!;
      status = cached.status;
      reason = cached.reason;
    } else {
      if (!pendingFetches.has(link)) {
        pendingFetches.add(link);
        analyzeSite(link).then((result) => {
          analysisCache.set(link, result);
          pendingFetches.delete(link);
          // Trigger storage update
          updateResultsStorage();
        });
      }
    }

    results.push({
      title,
      link,
      description,
      badgeInfo: { title, link },
      status,
      reason,
    });
  });

  return results;
}

let isUpdating = false;

function updateResultsStorage(): void {
  if (isUpdating) return;
  isUpdating = true;

  // Use requestAnimationFrame or setTimeout to throttle and avoid blocking UI
  setTimeout(() => {
    try {
      const results = collectSearchResults();
      chrome.storage.local.set({ searchResults: results });
    } finally {
      isUpdating = false;
    }
  }, 100);
}

// Initial collection
updateResultsStorage();

// Watch for dynamic content changes
// Filter mutations to ignore badge changes from content-ui
const observer = new MutationObserver((mutations) => {
  let shouldUpdate = false;

  for (const mutation of mutations) {
    if (mutation.type === "childList") {
      // Check added nodes
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const node = mutation.addedNodes[i] as HTMLElement;
        // Ignore content-ui badge host
        if (node.classList && node.classList.contains(BADGE_HOST_CLASS))
          continue;
        if (
          node.parentElement &&
          node.parentElement.classList.contains(BADGE_HOST_CLASS)
        )
          continue;

        shouldUpdate = true;
      }
    } else if (mutation.type === "characterData") {
      // Text changed. Check if target is inside badge host
      if (
        mutation.target.parentElement &&
        mutation.target.parentElement.classList.contains(BADGE_HOST_CLASS)
      )
        continue;
      shouldUpdate = true;
    } else {
      shouldUpdate = true;
    }
  }

  if (shouldUpdate) {
    updateResultsStorage();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true,
});
