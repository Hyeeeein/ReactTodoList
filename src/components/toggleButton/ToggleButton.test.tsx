import { render, screen, fireEvent } from "@testing-library/react";
import { ToggleButton } from "./ToggleButton";

test("다크 모드 버튼 클릭 시 onClick 핸들러가 호출되어야 한다.", () => {
  const handleClick = jest.fn();
  render(<ToggleButton darkMode={false} onClick={handleClick} />);

  const button = screen.getByText("다크 모드");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalled();
});
