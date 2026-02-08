import "@src/components/SettingPage/SettingPage.css";
import { useEffect, useState } from "react";
import ArrowbackIcon from "@src/../public/icons/arrow_back.svg";

interface SettingPageProps {
  setPage: (page: "main" | "settings" | "profile") => void;
}

export default function SettingPage({ setPage }: SettingPageProps) {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    chrome.storage.local.get(["autoScan"], (result) => {
      if (result.autoScan !== undefined) {
        setToggle(result.autoScan);
      }
    });
  }, []);

  const handleToggle = () => {
    const newValue = !toggle;
    setToggle(newValue);
    chrome.storage.local.set({ autoScan: newValue });
  };

  return (
    <div className="setting-page">
      {/* 뒤로가기 */}
      <div className="back-button" onClick={() => setPage("main")}>
        <img src={ArrowbackIcon} alt="Back" />
        <div className="back-button-text">뒤로 가기</div>
      </div>

      {/* iOS 토글 */}
      <div className="toggle-container">
        <div
          onClick={handleToggle}
          className={`toggle-switch ${toggle ? "active" : "inactive"}`}
        >
          <div className={`toggle-knob ${toggle ? "active" : "inactive"}`} />
        </div>
        <div className="toggle-label">검색 시 자동 전수 검사</div>
      </div>

      <div className="setting-divider" />

      <div className="setting-links">
        <div className="setting-link">서비스 이용약관</div>
        <div className="setting-link">개인정보 처리방침</div>
        <div className="setting-link">오픈소스 라이선스</div>
      </div>
    </div>
  );
}
