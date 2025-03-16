export function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="add-button" onClick={onClick}>
      추가
    </button>
  );
}
