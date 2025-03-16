export function TodoInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      className="todo-input"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
