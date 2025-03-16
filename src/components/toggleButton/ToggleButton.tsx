export function ToggleButton({
  darkMode,
  onClick,
}: {
  darkMode: boolean;
  onClick: () => void;
}) {
  return (
    <button className="toggle-mode" onClick={onClick}>
      {darkMode ? "라이트 모드" : "다크 모드"}
    </button>
  );
}
