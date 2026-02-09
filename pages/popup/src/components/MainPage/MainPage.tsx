import "@src/components/MainPage/MainPage.css";
import getDomainFromLink from "@src/utils/getDomainFromLink";
import { useEffect, useState } from "react";
import Arrowup from "@src/../public/icons/arrow_up.svg";
import Arrowdown from "@src/../public/icons/arrow_down.svg";
import ColorButton from "@src/components/ColorButton/ColorButton";
import ReloadIcon from "@src/../public/icons/reload.svg";

interface Result {
  link: string;
  badgeInfo: {
    title: string;
    link: string;
  };
  status?: "safe" | "caution" | "danger" | "unknown" | "loading";
  reason?: string;
  expanded: boolean;
}

export default function MainPage() {
  const [results, setResults] = useState<Result[]>([]);
  const [page, setPage] = useState("main");
  const [isGoogleHome, setIsGoogleHome] = useState(false);

  const toggleExpand = (idx: number) => {
    setResults((prev) =>
      prev.map((r, i) => (i === idx ? { ...r, expanded: !r.expanded } : r)),
    );
  };

  useEffect(() => {
    const loadData = () => {
      chrome.storage.local.get("searchResults", (data) => {
        if (data.searchResults) {
          setResults((prev) => {
            // Merge with existing expanded state
            const newValue = data.searchResults.map((r: Result) => {
              const existing = prev.find((p) => p.link === r.link);
              return {
                ...r,
                expanded: existing ? existing.expanded : false,
              };
            });
            return newValue;
          });
        }
      });
    };

    loadData();

    const handleStorageChange = (
      changes: { [key: string]: chrome.storage.StorageChange },
      areaName: string,
    ) => {
      if (areaName === "local" && changes.searchResults) {
        loadData();
      }
    };

    chrome.storage.onChanged.addListener(handleStorageChange);
    return () => {
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
  }, []);

  const [isAutoScan, setIsAutoScan] = useState(true);

  useEffect(() => {
    chrome.storage.local.get("autoScan", (data) => {
      if (data.autoScan !== undefined) {
        setIsAutoScan(data.autoScan);
      }
    });

    const listener = (
      changes: { [key: string]: chrome.storage.StorageChange },
      areaName: string,
    ) => {
      if (areaName === "local" && changes.autoScan) {
        setIsAutoScan(changes.autoScan.newValue);
      }
    };
    chrome.storage.onChanged.addListener(listener);
    return () => chrome.storage.onChanged.removeListener(listener);
  }, []);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].url) {
        const url = new URL(tabs[0].url);

        if (url.pathname === "/settings") {
          setPage("settings");
        } else if (
          url.hostname === "www.google.com" &&
          (url.pathname === "/" || url.pathname === "")
        ) {
          setPage("main");
          setIsGoogleHome(true);
        } else {
          setPage("main");
          setIsGoogleHome(false);
        }
      }
    });
  }, []);

  return (
    <ul className="results-list">
      {results.length === 0 ? (
        <div className="reload-wrapper">
          <div
            className="reload-button"
            onClick={() => {
              chrome.tabs.query(
                { active: true, currentWindow: true },
                (tabs) => {
                  if (tabs[0]?.id) {
                    chrome.tabs.reload(tabs[0].id);
                  }
                },
              );
            }}
          >
            <div className="reload-button-content">
              <img src={ReloadIcon} alt="Reload" />
              <div className="reload-button-text">새로고침</div>
            </div>
          </div>
          <p className="reload-help-text">
            구글 검색 결과 페이지가 맞는지 확인해주세요.
          </p>
        </div>
      ) : (
        <>
          {!isAutoScan && (
            <div
              style={{
                padding: "12px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                marginBottom: "12px",
                textAlign: "center",
                color: "#666",
                fontSize: "13px",
              }}
            >
              자동 검사 설정이 꺼져있습니다.
            </div>
          )}
          {results.map((r, idx) => (
            <li key={idx} className="result-item">
              <div className="result-row" onClick={() => toggleExpand(idx)}>
                <div className="result-title">{getDomainFromLink(r.link)}</div>

                <div className="result-actions">
                  <ColorButton
                    title={r.badgeInfo.title}
                    link={r.badgeInfo.link}
                    status={r.status}
                  />
                  <img
                    src={r.expanded ? Arrowdown : Arrowup}
                    className="arrow-icon"
                  />
                </div>
              </div>

              {/* 확장 영역 */}
              <div
                className={`expand-area ${r.expanded ? "expanded" : "collapsed"}`}
              >
                {r.expanded && (
                  <div className="expand-content">
                    <p>{r.reason || "정보 없음"}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </>
      )}
    </ul>
  );
}
