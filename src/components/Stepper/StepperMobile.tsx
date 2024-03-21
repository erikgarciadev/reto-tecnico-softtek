import React from "react";
import "./styles.scss";

interface Props {
  steps: number;
  currentStep: number;
}

const StepperMobile: React.FC<Props> = ({ currentStep, steps }) => {
  const percentageProgress = Math.floor((currentStep * 100) / steps);

  return (
    <div className="stepper-mobile">
      <p className="stepper-mobile__text">
        PASO {currentStep} DE {steps}
      </p>
      <div className="content-progress">
        <div className="content-progress__background" />
        <div
          className="content-progress__progress"
          style={{
            width: `${percentageProgress}%`,
          }}
        />
      </div>
    </div>
  );
};

export default StepperMobile;
