import RedIcon from "../../../public/icons/red.svg";
import YellowIcon from "../../../public/icons/yellow.svg";
import GreenIcon from "../../../public/icons/green.svg";
import GreyIcon from "../../../public/icons/grey.svg";

interface StatusItem {
  label: string;
  color: string;
  icon: string;
}

const STATUS_MAP: Record<string, StatusItem> = {
  safe: { label: "안전", color: "#059669", icon: GreenIcon },
  caution: { label: "주의", color: "#ca8a04", icon: YellowIcon },
  danger: { label: "위험", color: "#dc2626", icon: RedIcon },
  unknown: { label: "오류", color: "#525252", icon: GreyIcon },
  loading: { label: "검사", color: "#525252", icon: GreyIcon },
};

interface ColorButtonProps {
  title: string;
  link: string;
  status?: "safe" | "caution" | "danger" | "unknown" | "loading";
}

export default function ColorButton({
  title,
  link,
  status = "loading",
}: ColorButtonProps) {
  const selected = STATUS_MAP[status] || STATUS_MAP.unknown;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log({ status, title, link });
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        fontSize: "12px",
        fontWeight: 600,
        fontFamily: `"Pretendard Variable", sans-serif`,
        cursor: "pointer",
        userSelect: "none",
        color: "white",
        borderRadius: "6px",
        padding: "0 6px",
        height: "22px",
        minWidth: "58px",
        backgroundColor: selected.color,
      }}
    >
      <img
        src={selected.icon}
        className={status === "loading" ? "animate-spin" : ""}
        style={{ width: "16px", height: "16px", display: "block" }}
        alt={selected.label}
      />
      {selected.label}
    </div>
  );
}
