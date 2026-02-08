import { createRoot } from "react-dom/client";
import inlineCss from "../../../dist/all/index.css?inline";
import App from "@src/matches/all/App";

console.log("[CEB] Content UI script loaded");

const injectedLinks = new Set<string>();

function injectReactBadges() {
  const elements = document.querySelectorAll("h3, .VuuXrf");

  elements.forEach((el) => {
    const element = el as HTMLElement;
    if (element.dataset.extInjected) return;

    // Determine the anchor (link)
    let anchor: HTMLAnchorElement | null = element.closest("a");

    // Special handling for official site class .VuuXrf which might not be inside an A tag directly
    if (!anchor && element.classList.contains("VuuXrf")) {
      const container =
        element.closest(".B6fmyf") || element.closest(".MjjYud");
      anchor = container?.querySelector("a") || null;
    }

    if (!anchor) return;

    const link = anchor.href;
    if (!link) return;

    // Deduplicate: If we already injected a badge for this link, skip
    if (injectedLinks.has(link)) return;

    // Mark as injected
    element.dataset.extInjected = "true";
    injectedLinks.add(link);

    const title = element.innerText;

    // Create shadow host
    const shadowHost = document.createElement("span");
    shadowHost.className = "recon-badge-host";
    shadowHost.style.display = "inline-flex";
    shadowHost.style.alignItems = "center";
    shadowHost.style.marginLeft = "8px";
    shadowHost.style.verticalAlign = "middle";
    element.appendChild(shadowHost);

    // Create shadow root
    const shadowRoot = shadowHost.attachShadow({ mode: "open" });

    // Add styles
    const style = document.createElement("style");
    style.textContent = inlineCss;
    shadowRoot.appendChild(style);

    // Create mount point
    const mountPoint = document.createElement("div");
    mountPoint.style.display = "inline-flex";
    shadowRoot.appendChild(mountPoint);

    // Render React component
    const root = createRoot(mountPoint);
    root.render(<App title={title} link={link} />);
  });
}

// Initial injection
injectReactBadges();

// Watch for dynamic content changes
const observer = new MutationObserver(() => {
  injectReactBadges();
});
observer.observe(document.body, { childList: true, subtree: true });
