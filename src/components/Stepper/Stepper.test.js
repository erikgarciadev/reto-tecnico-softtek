import { render } from "@testing-library/react";
import { Stepper, StepperMobile } from "./index";

test("Should render Stepper", () => {
  render(<Stepper currentStep={1} steps={[]}></Stepper>);
});

test("Should have length elements step equals length to prop steps", () => {
  const steps = [
    {
      text: "Step 1",
      path: "/step",
    },
  ];
  const { container } = render(
    <Stepper currentStep={1} steps={steps}></Stepper>
  );
  const stepElements = container.querySelectorAll(".step");
  expect(stepElements.length).toBe(steps.length);
});

test("Should have class step--active, of element currentStep", () => {
  const steps = [
    {
      text: "Step 1",
      path: "/step",
    },
    {
      text: "Step 2",
      path: "/step2",
    },
  ];
  const { container } = render(
    <Stepper currentStep={1} steps={steps}></Stepper>
  );
  const stepActiveElement = container.querySelectorAll(".step")[0];
  const stepElement = container.querySelectorAll(".step")[1];
  expect(stepActiveElement).toHaveClass("step--active");
  expect(stepElement).not.toHaveClass("step--active");
});

test("Should render StepperMobile", () => {
  render(<StepperMobile currentStep={1} steps={2}></StepperMobile>);
});
