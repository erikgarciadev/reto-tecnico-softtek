import { fireEvent, render } from "@testing-library/react";
import Checkbox from "./index";

test("Should render Checkbox", () => {
  render(<Checkbox></Checkbox>);
});

test("Should call onChange", () => {
  const fakeOnclick = jest.fn();
  const { container } = render(<Checkbox onChange={fakeOnclick}></Checkbox>);
  const checkboxElement = container.querySelector("input");
  fireEvent.click(checkboxElement);

  expect(fakeOnclick).toHaveBeenCalled();
});
