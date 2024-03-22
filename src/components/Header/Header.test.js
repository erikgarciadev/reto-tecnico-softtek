import { render } from "@testing-library/react";
import Header from "./index";

test("Should render Header", () => {
  render(<Header></Header>);
});

test("Should have class header--transparent, when prop transparent is true", () => {
  const text = "Test";
  const wrapper = render(<Header transparent>{text}</Header>);
  const headerElement = wrapper.baseElement.querySelector("header");

  expect(headerElement).toHaveClass("header--transparent");
});
