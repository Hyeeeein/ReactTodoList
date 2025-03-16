import { render, screen, fireEvent } from "@testing-library/react";
import { TodoInput } from "./TodoInput";

test("입력값이 변경되면 onChange 핸들러가 호출되어야 한다.", () => {
  const handleChange = jest.fn();
  render(<TodoInput value="" onChange={handleChange} />);

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "새로운 할 일" } });

  expect(handleChange).toHaveBeenCalledWith("새로운 할 일");
});
