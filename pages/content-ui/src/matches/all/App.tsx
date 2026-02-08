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

  useEffect(() => {
    const updateStatus = async () => {
      const data = await chrome.storage.local.get("searchResults");
      const results: SearchResult[] = data.searchResults || [];
      const found = results.find((r) => r.link === link);
      if (found?.status) {
        setStatus(found.status);
      }
    };

    updateStatus();

    const listener = (
      changes: { [key: string]: chrome.storage.StorageChange },
      areaName: string,
    ) => {
      if (areaName === "local" && changes.searchResults) {
        updateStatus();
      }
    };

    chrome.storage.onChanged.addListener(listener);
    return () => chrome.storage.onChanged.removeListener(listener);
  }, [link]);

  return <ColorButton title={title} link={link} status={status} />;
}
