import React from "react";
import "./styles.scss";
import Step from "./Step";
import { Step as StepProps } from "../../interfaces";

interface Props {
  currentStep: number;
  steps: StepProps[];
}

const Stepper: React.FC<Props> = ({ currentStep, steps }) => {
  return (
    <>
      <div className="stepper">
        {steps.map((step, i) => (
          <Step
            key={step.path}
            text={step.text}
            step={i + 1}
            active={currentStep === i + 1}
          />
        ))}
      </div>
    </>
  );
};

export default Stepper;
