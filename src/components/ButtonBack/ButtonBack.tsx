import React from "react";
import { ArrowLeftIcon } from "../Icons";
import "./styles.scss";

interface Props {
  onClick?: () => void;
}

const ButtonBack: React.FC<Props> = ({ onClick = () => {} }) => {
  return (
    <div className="button-back" onClick={onClick}>
      <div className="button-back__circle">
        <ArrowLeftIcon />
      </div>
      <p className="button-back__text">Volver</p>
    </div>
  );
};

export default ButtonBack;
