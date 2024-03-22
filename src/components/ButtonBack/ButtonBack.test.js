import { fireEvent, render } from "@testing-library/react";
import ButtonBack from "./index";

test("Should render ButtonBack", () => {
  render(<ButtonBack></ButtonBack>);
});

test("Shoul call onClick", () => {
  const fakeOnclick = jest.fn();
  const wrapper = render(<ButtonBack onClick={fakeOnclick}></ButtonBack>);
  const buttonBackElement = wrapper.baseElement.querySelector(".button-back");
  fireEvent.click(buttonBackElement);

  expect(fakeOnclick).toHaveBeenCalled();
});
