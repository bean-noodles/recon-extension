import { useEffect, useState } from "react";
import ColorButton from "./ColorButton";

interface AppProps {
  title: string;
  link: string;
}

interface SearchResult {
  link: string;
  status?: "safe" | "caution" | "danger" | "unknown" | "loading";
}

export default function App({ title, link }: AppProps) {
  const [status, setStatus] = useState<
    "safe" | "caution" | "danger" | "unknown" | "loading"
  >("loading");
  const [isAutoScan, setIsAutoScan] = useState(true);

  useEffect(() => {
    // Initial fetch
    chrome.storage.local.get(["searchResults", "autoScan"], (data) => {
      // Update autoScan
      if (data.autoScan !== undefined) {
        setIsAutoScan(data.autoScan);
      }

      // Update status
      const results: SearchResult[] = data.searchResults || [];
      const found = results.find((r) => r.link === link);
      if (found?.status) {
        setStatus(found.status);
      }
    });

    const listener = (
      changes: { [key: string]: chrome.storage.StorageChange },
      areaName: string,
    ) => {
      if (areaName === "local") {
        // Handle searchResults change
        if (changes.searchResults) {
          const results: SearchResult[] = changes.searchResults.newValue || [];
          const found = results.find((r) => r.link === link);
          if (found?.status) {
            setStatus(found.status);
          }
        }

        // Handle autoScan change
        if (changes.autoScan) {
          setIsAutoScan(changes.autoScan.newValue);
        }
      }
    };

    chrome.storage.onChanged.addListener(listener);
    return () => chrome.storage.onChanged.removeListener(listener);
  }, [link]);

  if (!isAutoScan) {
    return null;
  }

  return <ColorButton title={title} link={link} status={status} />;
}
