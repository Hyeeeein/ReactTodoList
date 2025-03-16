import { render, screen, fireEvent } from "@testing-library/react";
import { AddButton } from "./AddButton";

test("버튼 클릭 시 onClick 핸들러가 호출되어야 한다.", () => {
  const handleClick = jest.fn();
  render(<AddButton onClick={handleClick} />);

  const button = screen.getByText("추가");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalled();
});
