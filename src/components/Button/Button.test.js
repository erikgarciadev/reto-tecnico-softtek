import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

test("Text show be Test", () => {
  const text = "Test";
  render(<Button>{text}</Button>);
  const textElement = screen.getByText(text);
  expect(textElement).toBeInTheDocument();
});

test("Button should have class button--primary, when prop primary is true", () => {
  const text = "Test";
  render(<Button primary>{text}</Button>);
  const buttonElement = screen.getByRole("button");

  expect(buttonElement).toHaveClass("button--primary");
});

test("Button should have class button--fullWidth, when prop fullWidth is true", () => {
  const text = "Test";
  render(<Button fullWidth>{text}</Button>);
  const buttonElement = screen.getByRole("button");

  expect(buttonElement).toHaveClass("button--fullWidth");
});

test("Shoul call onClick", () => {
  const text = "Test";
  const fakeOnclick = jest.fn();
  render(
    <Button fullWidth primary onClick={fakeOnclick}>
      {text}
    </Button>
  );
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);

  expect(fakeOnclick).toHaveBeenCalled();
});
