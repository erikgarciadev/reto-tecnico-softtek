import React from "react";
import "./styles.scss";
import { classNames } from "../../utils/util";

interface Props {
  active: boolean;
  text: string;
  step: number;
}

const Step: React.FC<Props> = ({ active, text, step }) => {
  return (
    <div className={classNames("step", active ? "step--active" : "")}>
      <div className="step__circle">{step}</div>
      <p className="step__text">{text}</p>
    </div>
  );
};

export default Step;
