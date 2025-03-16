import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./App";

describe("TodoApp 기능 테스트", () => {
  test("할 일을 추가하면 목록에 나타나야 한다.", () => {
    render(<TodoApp />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("추가");

    fireEvent.change(input, { target: { value: "새로운 할 일" } });
    fireEvent.click(addButton);

    expect(screen.getByText("새로운 할 일")).toBeInTheDocument();
  });

  test("할 일을 클릭하면 완료 상태가 변경되어야 한다.", () => {
    render(<TodoApp />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("추가");

    fireEvent.change(input, { target: { value: "완료할 일" } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText("완료할 일");
    fireEvent.click(todoItem);

    expect(todoItem).toHaveClass("completed");
  });

  test("할 일을 삭제하면 목록에서 사라져야 한다.", () => {
    render(<TodoApp />);

    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("추가");

    fireEvent.change(input, { target: { value: "삭제할 일" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText("삭제");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("삭제할 일")).not.toBeInTheDocument();
  });

  test("다크 모드 버튼을 클릭하면 배경이 변경되어야 한다.", () => {
    render(<TodoApp />);

    const toggleButton = screen.getByText("다크 모드");

    fireEvent.click(toggleButton);
    expect(screen.getByTestId("container")).toHaveClass("dark");

    fireEvent.click(toggleButton);
    expect(screen.getByTestId("container")).toHaveClass("light");
  });
});
