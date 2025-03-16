import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "./TodoItem";

test("할 일을 클릭하면 onToggle 핸들러가 호출되어야 한다.", () => {
  const handleToggle = jest.fn();
  render(
    <TodoItem
      todo={{ id: 1, text: "테스트 할 일", completed: false }}
      onToggle={handleToggle}
      onDelete={() => {}}
    />
  );

  const todoText = screen.getByText("테스트 할 일");
  fireEvent.click(todoText);

  expect(handleToggle).toHaveBeenCalledWith(1);
});

test("삭제 버튼 클릭 시 onDelete 핸들러가 호출되어야 한다.", () => {
  const handleDelete = jest.fn();
  render(
    <TodoItem
      todo={{ id: 1, text: "테스트 할 일", completed: false }}
      onToggle={() => {}}
      onDelete={handleDelete}
    />
  );

  const deleteButton = screen.getByText("삭제");
  fireEvent.click(deleteButton);

  expect(handleDelete).toHaveBeenCalledWith(1);
});
