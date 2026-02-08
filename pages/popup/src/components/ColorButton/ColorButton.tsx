import "@src/components/ColorButton/ColorButton.css";
import RedIcon from "@src/../public/icons/red.svg";
import YellowIcon from "@src/../public/icons/yellow.svg";
import GreenIcon from "@src/../public/icons/green.svg";
import GreyIcon from "@src/../public/icons/grey.svg";

interface StatusItem {
  label: string;
  color: "green" | "yellow" | "red" | "grey";
  icon: string;
}

const STATUS_MAP: Record<string, StatusItem> = {
  safe: { label: "안전", color: "green", icon: GreenIcon },
  caution: { label: "주의", color: "yellow", icon: YellowIcon },
  danger: { label: "위험", color: "red", icon: RedIcon },
  unknown: { label: "오류!!!", color: "grey", icon: GreyIcon },
  loading: { label: "검사중", color: "grey", icon: GreyIcon },
};

interface ColorButtonProps {
  title: string;
  link: string;
  status?: "safe" | "caution" | "danger" | "unknown" | "loading";
}

export default function ColorButton({
  title,
  link,
  status = "unknown",
}: ColorButtonProps) {
  const selected = STATUS_MAP[status] || STATUS_MAP.unknown;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log({ status, title, link });
  };

  return (
    <div
      className={`mainBadge badge-${selected.color}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={selected.icon}
        style={{ width: 16, height: 16 }}
        alt={selected.label}
      />
      {selected.label}
    </div>
  );
}
