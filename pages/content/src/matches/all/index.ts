console.log("[CEB] All content script loaded");

// Embedded Icons
const redIcon = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_23_1225)">
<path d="M14.1633 7.99994C14.1633 7.63626 14.0717 7.27857 13.897 6.95957C13.7223 6.64056 13.4704 6.37034 13.1639 6.17442C12.9867 6.06105 12.8997 5.84907 12.9458 5.64382C13.026 5.28731 13.0144 4.916 12.9126 4.56504C12.8109 4.21414 12.6221 3.89435 12.3638 3.636C12.1054 3.37767 11.7857 3.18889 11.4348 3.08718C11.0839 2.9855 10.713 2.97454 10.3566 3.05462C10.1513 3.10079 9.93876 3.01317 9.82539 2.83587C9.62953 2.52959 9.35974 2.27745 9.04089 2.1028C8.72187 1.92813 8.36357 1.83652 7.99987 1.83652C7.63622 1.83655 7.27847 1.92816 6.95951 2.1028C6.64049 2.27747 6.37027 2.52945 6.17435 2.83587C6.06104 3.01308 5.84899 3.10064 5.64375 3.05462C5.28784 2.97486 4.91727 2.98636 4.56693 3.08783C4.21666 3.18933 3.89733 3.37775 3.63919 3.63535C3.38112 3.89299 3.19254 4.21173 3.09036 4.56179C2.98816 4.91196 2.9755 5.28249 3.05456 5.63861C3.10012 5.84433 3.01191 6.05652 2.83385 6.16921C2.52518 6.36459 2.27113 6.63501 2.09492 6.95501C1.91869 7.2751 1.82605 7.63455 1.82604 7.99994C1.82604 8.36535 1.91869 8.72476 2.09492 9.04486C2.27112 9.36489 2.52518 9.63527 2.83385 9.83067C3.01198 9.9434 3.10024 10.1561 3.05456 10.3619C2.97557 10.7179 2.98822 11.088 3.09036 11.4381C3.19258 11.7883 3.38099 12.1075 3.63919 12.3652C3.89737 12.6228 4.2166 12.8112 4.56693 12.9127C4.91728 13.0142 5.28783 13.025 5.64375 12.9452C5.84928 12.8992 6.06183 12.987 6.175 13.1647C6.37067 13.4722 6.64125 13.7255 6.96081 13.901C7.28029 14.0764 7.63867 14.1685 8.00313 14.1686C8.36768 14.1686 8.72654 14.0764 9.04609 13.901C9.3656 13.7255 9.6356 13.4722 9.83125 13.1647C9.94419 12.9872 10.1565 12.8997 10.3618 12.9452C10.7178 13.0242 11.088 13.0122 11.438 12.9101C11.7882 12.8079 12.1074 12.6188 12.3651 12.3606C12.6228 12.1024 12.8112 11.7833 12.9126 11.4329C13.0141 11.0825 13.025 10.712 12.9452 10.3561C12.8992 10.1509 12.9868 9.93876 13.1639 9.82546C13.4704 9.62953 13.7223 9.35931 13.897 9.0403C14.0716 8.72131 14.1633 8.3636 14.1633 7.99994ZM15.1633 7.99994C15.1633 8.53145 15.0298 9.05456 14.7746 9.52077C14.5735 9.88805 14.3008 10.2095 13.9758 10.47C14.0233 10.8854 13.9898 11.3071 13.8729 11.7109C13.7246 12.223 13.4494 12.6896 13.0728 13.067C12.6962 13.4443 12.2304 13.7203 11.7186 13.8697C11.3151 13.9875 10.8933 14.0219 10.4777 13.9752C10.2173 14.3018 9.89533 14.5758 9.52721 14.7779C9.06021 15.0343 8.53587 15.1686 8.00313 15.1686C7.47038 15.1685 6.94602 15.0343 6.47904 14.7779C6.11105 14.5759 5.7889 14.3023 5.52852 13.9758C5.11355 14.0232 4.69224 13.9898 4.28893 13.873C3.77684 13.7247 3.31019 13.4494 2.93281 13.0729C2.5555 12.6963 2.27946 12.2304 2.13008 11.7187C2.01236 11.3154 1.97738 10.8938 2.02396 10.4785C1.69627 10.2182 1.42154 9.89584 1.21862 9.52728C0.961055 9.05945 0.826042 8.53398 0.826042 7.99994C0.826053 7.46589 0.96105 6.94042 1.21862 6.47259C1.42162 6.10391 1.69612 5.78111 2.02396 5.52077C1.97752 5.10571 2.01243 4.68424 2.13008 4.28119C2.27948 3.76949 2.5555 3.30357 2.93281 2.92702C3.3102 2.55042 3.77683 2.27521 4.28893 2.12689C4.69242 2.01003 5.11402 1.97596 5.52917 2.02337C5.78955 1.69842 6.11188 1.42692 6.47904 1.22585C6.94525 0.970577 7.46835 0.836547 7.99987 0.836525C8.53143 0.836525 9.05445 0.970558 9.5207 1.22585C9.88778 1.42684 10.2096 1.69856 10.4699 2.02337C10.8861 1.97551 11.3089 2.00964 11.7134 2.12689C12.2262 2.27557 12.6933 2.55144 13.0708 2.92897C13.4485 3.30661 13.7242 3.7741 13.8729 4.28705C13.99 4.69123 14.0241 5.11338 13.9764 5.52923C14.3015 5.78967 14.5735 6.11183 14.7746 6.4791C15.0299 6.94532 15.1633 7.46841 15.1633 7.99994Z" fill="#FEF2F2"/>
<path d="M7.5 8V5.33333C7.5 5.05719 7.72386 4.83333 8 4.83333C8.27614 4.83333 8.5 5.05719 8.5 5.33333V8C8.5 8.27614 8.27614 8.5 8 8.5C7.72386 8.5 7.5 8.27614 7.5 8Z" fill="#FEF2F2"/>
<path d="M8.00651 10.1667C8.28265 10.1667 8.50651 10.3905 8.50651 10.6667C8.50651 10.9428 8.28265 11.1667 8.00651 11.1667H8C7.72386 11.1667 7.5 10.9428 7.5 10.6667C7.5 10.3905 7.72386 10.1667 8 10.1667H8.00651Z" fill="#FEF2F2"/>
</g>
<defs>
<clipPath id="clip0_23_1225">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const yellowIcon = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8333 3.9997C12.8333 3.95561 12.8157 3.91305 12.7845 3.88186C12.7533 3.8507 12.7108 3.83303 12.6667 3.83303C11.1734 3.83303 9.40342 2.96621 8.18164 1.89944C8.13096 1.85622 8.06661 1.83303 8 1.83303C7.93339 1.83303 7.86903 1.85687 7.81836 1.90009C6.6037 2.95969 4.82684 3.83303 3.33333 3.83303C3.2892 3.83303 3.24673 3.8507 3.21549 3.88186C3.18431 3.91305 3.16674 3.95561 3.16666 3.9997V8.66637C3.16666 10.2009 3.69782 11.3262 4.53841 12.1872C5.28593 12.9528 6.29568 13.5264 7.44336 13.9711L7.94336 14.154L7.95442 14.1579C7.98982 14.1711 8.02859 14.1716 8.06445 14.1599C9.41433 13.6891 10.609 13.0639 11.4622 12.1885C12.3023 11.3265 12.8333 10.2009 12.8333 8.66637V3.9997ZM13.8333 8.66637C13.8333 10.4651 13.1976 11.8401 12.1777 12.8864C11.1715 13.9187 9.81359 14.6094 8.39127 15.1052L8.38737 15.1071C8.13688 15.192 7.86506 15.1884 7.61653 15.0987C6.19053 14.6062 4.83018 13.9174 3.82291 12.8858C2.80204 11.8401 2.16666 10.465 2.16666 8.66637V3.9997C2.16674 3.69039 2.28974 3.39355 2.50846 3.17483C2.72724 2.95613 3.02398 2.83303 3.33333 2.83303C4.50477 2.83303 6.05883 2.10897 7.16406 1.14358L7.16862 1.13968C7.40037 0.941726 7.69521 0.833035 8 0.833035C8.26673 0.833035 8.52566 0.916534 8.74153 1.07001L8.83138 1.13968L8.83594 1.14358C9.94735 2.11524 11.4948 2.83303 12.6667 2.83303C12.976 2.83303 13.2728 2.95613 13.4915 3.17483C13.7103 3.39355 13.8333 3.69039 13.8333 3.9997V8.66637Z" fill="#FEFCE8"/>
<path d="M6.69101 4.52072C7.19796 4.22622 7.79224 4.11872 8.37005 4.21799C8.94785 4.31727 9.47224 4.61689 9.85182 5.06369C10.2314 5.51049 10.4423 6.07641 10.4469 6.66265V6.66655C10.4469 7.59854 9.75439 8.22908 9.22422 8.58257C8.944 8.76938 8.66718 8.9076 8.4625 8.99859C8.35943 9.04439 8.27253 9.07914 8.21054 9.10275C8.17955 9.11456 8.15425 9.12372 8.13633 9.1301C8.1275 9.13323 8.12013 9.13544 8.11484 9.13726C8.11223 9.13816 8.11002 9.13929 8.10833 9.13986C8.10759 9.14011 8.10693 9.14033 8.10638 9.14051L8.10508 9.14116C7.8431 9.22849 7.55959 9.08673 7.47226 8.82476C7.38503 8.56298 7.52642 8.28013 7.78802 8.1926L7.80169 8.18804C7.81304 8.184 7.8308 8.17686 7.85442 8.16786C7.90181 8.1498 7.97181 8.12205 8.05625 8.08452C8.22651 8.00884 8.44994 7.89693 8.66953 7.75054C9.13774 7.43835 9.44494 7.07017 9.44687 6.67046L9.43971 6.5396C9.41064 6.23517 9.28944 5.94548 9.0901 5.71083C8.86236 5.44275 8.54746 5.26323 8.20078 5.20366C7.85408 5.14409 7.49715 5.2086 7.19297 5.3853C6.88895 5.562 6.65668 5.83991 6.53672 6.17046C6.44253 6.43004 6.15567 6.56413 5.89609 6.46994C5.63654 6.37573 5.50243 6.08888 5.59661 5.82931C5.7966 5.27824 6.1841 4.81521 6.69101 4.52072Z" fill="#FEFCE8"/>
<path d="M8.00651 10.8333C8.28265 10.8333 8.50651 11.0572 8.50651 11.3333C8.50651 11.6095 8.28265 11.8333 8.00651 11.8333H8C7.72386 11.8333 7.5 11.6095 7.5 11.3333C7.5 11.0572 7.72386 10.8333 8 10.8333H8.00651Z" fill="#FEFCE8"/>
</svg>
`;

const greenIcon = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9798 3.64648C13.1751 3.45122 13.4916 3.45122 13.6868 3.64648C13.8821 3.84175 13.8821 4.15825 13.6868 4.35352L6.35351 11.6868C6.15825 11.8821 5.84174 11.8821 5.64648 11.6868L2.31315 8.35352C2.11789 8.15825 2.11789 7.84175 2.31315 7.64648C2.50841 7.45122 2.82492 7.45122 3.02018 7.64648L6 10.6263L12.9798 3.64648Z" fill="#ECFDF5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const greyIcon = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 7.5C14 6.26655 13.649 5.05856 12.9881 4.01713C12.3272 2.97569 11.3836 2.1438 10.2676 1.61862C9.15151 1.09345 7.90906 0.896662 6.68533 1.05125C5.46161 1.20585 4.30713 1.70543 3.35674 2.49166C2.40636 3.27789 1.69929 4.31831 1.31813 5.49139C0.936976 6.66447 0.897463 7.92179 1.20421 9.11648C1.51096 10.3112 2.1513 11.3939 3.05044 12.2383C3.94959 13.0827 5.07042 13.6537 6.28202 13.8849L6.62306 12.0971C5.7507 11.9307 4.9437 11.5195 4.29632 10.9116C3.64893 10.3036 3.18789 9.52405 2.96703 8.66387C2.74617 7.80369 2.77462 6.89842 3.04906 6.0538C3.32349 5.20918 3.83258 4.46008 4.51686 3.894C5.20114 3.32791 6.03236 2.96821 6.91344 2.8569C7.79452 2.7456 8.68909 2.88728 9.49265 3.26541C10.2962 3.64354 10.9756 4.2425 11.4515 4.99233C11.9273 5.74216 12.18 6.61192 12.18 7.5H14Z" fill="#F5F5F5"/>
</svg>
`;

// Inject CSS
const styles = `
.recon-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  cursor: pointer;
  user-select: none;
  color: white;
  border-radius: 6px;
  padding: 0 6px;
  height: 22px;
  min-width: 58px;
  margin-left: 8px;
  vertical-align: middle;
  text-decoration: none !important;
  box-sizing: border-box;
  line-height: normal;
}
.recon-badge img {
    width: 16px;
    height: 16px;
    display: block;
}
.recon-badge-green { background-color: #059669; }
.recon-badge-yellow { background-color: #ca8a04; }
.recon-badge-red { background-color: #dc2626; }
.recon-badge-grey { background-color: #525252; }
`;

const styleEl = document.createElement("style");
styleEl.textContent = styles;
document.head.appendChild(styleEl);

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

const BADGE_CLASS = "recon-badge";

// Status configuration
const STATUS_CONFIG: Record<
  string,
  { label: string; class: string; icon: string }
> = {
  safe: { label: "안전", class: "green", icon: greenIcon },
  caution: { label: "주의", class: "yellow", icon: yellowIcon },
  danger: { label: "위험", class: "red", icon: redIcon },
  unknown: { label: "오류!!!", class: "grey", icon: greyIcon },
  loading: { label: "검사중", class: "grey", icon: greyIcon },
};

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

function injectBadge(
  h3: HTMLElement,
  status: SearchResult["status"] = "loading",
) {
  let badge = h3.querySelector(`.${BADGE_CLASS}`) as HTMLElement;

  if (!badge) {
    badge = document.createElement("span");
    badge.className = BADGE_CLASS;
    h3.appendChild(badge);
  }

  const config = STATUS_CONFIG[status] || STATUS_CONFIG.unknown;

  // Update class for color
  badge.className = `${BADGE_CLASS} recon-badge-${config.class}`;

  // Update content safely
  // use data:image/svg+xml;base64 is better but raw is fine if no quote issues.
  // simpler to encodeURIComponent the SVG string for src
  const encodedIcon = encodeURIComponent(config.icon);
  badge.innerHTML = `<img src="data:image/svg+xml;utf8,${encodedIcon}" alt="${config.label}" /> ${config.label}`;
}

function collectSearchResults(): SearchResult[] {
  const results: SearchResult[] = [];
  const h3List = document.querySelectorAll("h3");

  h3List.forEach((h3) => {
    const anchor = h3.closest("a");
    if (!anchor) return;

    // Clone node to extract text without badge
    const clone = h3.cloneNode(true) as HTMLElement;
    const badge = clone.querySelector(`.${BADGE_CLASS}`);
    if (badge) badge.remove();

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
      injectBadge(h3, status);
    } else {
      injectBadge(h3, "loading");
      if (!pendingFetches.has(link)) {
        pendingFetches.add(link);
        analyzeSite(link).then((result) => {
          analysisCache.set(link, result);
          pendingFetches.delete(link);
          injectBadge(h3, result.status);
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
// Filter mutations to ignore our own badge changes
const observer = new MutationObserver((mutations) => {
  let shouldUpdate = false;

  for (const mutation of mutations) {
    if (mutation.type === "childList") {
      // Check added nodes
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const node = mutation.addedNodes[i] as HTMLElement;
        // If it's our badge, ignore
        if (node.classList && node.classList.contains(BADGE_CLASS)) continue;
        // If it's inside our badge, ignore
        if (
          node.parentElement &&
          node.parentElement.classList.contains(BADGE_CLASS)
        )
          continue;

        shouldUpdate = true;
      }
    } else if (mutation.type === "characterData") {
      // Text changed. Check if target is inside badge
      if (
        mutation.target.parentElement &&
        mutation.target.parentElement.classList.contains(BADGE_CLASS)
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
