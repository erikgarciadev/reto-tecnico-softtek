import { render, screen } from "@testing-library/react";
import Badge from "./index";
import { TYPES_BADGES } from "../../utils/constants";

test("Should render Badge", () => {
  render(<Badge></Badge>);
});

test("Shoul exist text in Badge", () => {
  const text = "Test";
  render(<Badge>{text}</Badge>);
  const textElement = screen.getByText(text);
  expect(textElement).toBeInTheDocument();
});

test("Should have class badge--plan, when prop type is plan", () => {
  const text = "Test";
  const wrapper = render(<Badge type={TYPES_BADGES.PLAN}>{text}</Badge>);
  const bageElement = wrapper.baseElement.querySelector("span");

  expect(bageElement).toHaveClass("badge--plan");
});
