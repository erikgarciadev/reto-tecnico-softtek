import { Stepper, StepperMobile } from "../../components/Stepper";
import { steps } from "../../utils/data";
import ButtonBack from "../../components/ButtonBack";
import { Link } from "react-router-dom";
import { getDataStep } from "../../utils/util";
import "./styles.scss";

const Steps = () => {
  const { currentStep, prevPath } = getDataStep(steps, window.location.hash);

  return (
    <div className="container-steps">
      <div className="container container-stepper">
        <div className="container-stepper__normal">
          <Stepper currentStep={currentStep} steps={steps} />
        </div>
        <div className="container-stepper__mobile">
          <Link to={prevPath}>
            <ButtonBack />
          </Link>
          <StepperMobile currentStep={currentStep} steps={steps.length} />
        </div>
      </div>
    </div>
  );
};

export default Steps;
