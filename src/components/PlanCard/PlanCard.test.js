import { fireEvent, render, screen } from "@testing-library/react";
import PlanCard from "./index";
import { TYPES_OPTIONS } from "../../utils/constants";

test("Should render PlanCard", () => {
  render(
    <PlanCard
      onClick={() => {}}
      plan={{
        age: 20,
        description: ["Test", "Test2"],
        name: "Test",
        price: 200,
      }}
    ></PlanCard>
  );
});

test("Should call onClick", () => {
  const fakeOnclick = jest.fn();
  const { container } = render(
    <PlanCard
      onClick={fakeOnclick}
      plan={{
        age: 20,
        description: ["Test", "Test2"],
        name: "Test",
        price: 200,
      }}
    ></PlanCard>
  );

  const buttonElement = container.querySelector("button");
  fireEvent.click(buttonElement);
  expect(fakeOnclick).toHaveBeenCalled();
});

test("Should show  badge Plan recomendado, when name of plan has Clínica", () => {
  const fakeOnclick = jest.fn();
  render(
    <PlanCard
      onClick={fakeOnclick}
      plan={{
        age: 20,
        description: ["Test", "Test2"],
        name: "Clínica test",
        price: 200,
      }}
    ></PlanCard>
  );

  const badgeElement = screen.getByText("Plan recomendado");
  expect(badgeElement).toBeInTheDocument();
});

test("Should show  text antes, when typeOptions is forsomeon", () => {
  const fakeOnclick = jest.fn();
const { container} =  render(
    <PlanCard
      onClick={fakeOnclick}
      plan={{
        age: 20,
        description: ["Test", "Test2"],
        name: "Clínica test",
        price: 200,
      }}
      typeOption={TYPES_OPTIONS.FOR_SOMEONE}
    ></PlanCard>
  );

  const textElement = container.querySelector('.plan-card__content-price__before-price')
  expect(textElement).toBeInTheDocument();
});
