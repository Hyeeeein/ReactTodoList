import { Todo } from "../../App";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item">
      <span
        className={todo.completed ? "completed" : ""}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button className="delete-button" onClick={() => onDelete(todo.id)}>
        삭제
      </button>
    </li>
  );
}
