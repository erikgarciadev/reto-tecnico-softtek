import { render } from "@testing-library/react";
import Input from "./index";

test("Should render Header", () => {
  render(<Input label="Test"></Input>);
});

test("Should not have class container-input--border, when prop border is false", () => {
  const { container } = render(<Input border={false}></Input>);
  const wrapperInputElement = container.querySelector("div");

  expect(wrapperInputElement).not.toHaveClass("container-input--border");
});
