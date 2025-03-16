import { useState, useEffect } from "react";
import "./App.css";
import { TodoInput } from "./components/todoInput/TodoInput";
import { AddButton } from "./components/addButton/AddButton";
import { ToggleButton } from "./components/toggleButton/ToggleButton";
import { TodoItem } from "./components/todoItem/TodoItem";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) setDarkMode(JSON.parse(savedMode));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const addTodo = (): void => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      data-testid="container"
      className={`container ${darkMode ? "dark" : "light"}`}
    >
      <ToggleButton
        darkMode={darkMode}
        onClick={() => setDarkMode(!darkMode)}
      />
      <div className="input-container">
        <TodoInput value={input} onChange={setInput} />
        <AddButton onClick={addTodo} />
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
