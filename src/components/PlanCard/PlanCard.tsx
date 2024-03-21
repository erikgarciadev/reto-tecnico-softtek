import React from "react";
import { Plan, TypesOptionsValues } from "../../interfaces";
import "./styles.scss";
import Badge from "../Badge";
import {
  PERCENTAGE_DISCOUNT_FOR_SOMEONE,
  TYPES_BADGES,
  TYPES_OPTIONS,
} from "../../utils/constants";
import Button from "../Button";
import "./styles.scss";

interface Props {
  plan: Plan;
  typeOption: TypesOptionsValues;
  onClick: (plan: Plan) => void;
}

const PlanCard: React.FC<Props> = ({ plan, onClick, typeOption }) => {
  const hasClinic = plan.name.includes("Clínica");
  const urlImage = hasClinic ? "./images/clinic.svg" : "./images/home.svg";
  const isForSomeone = typeOption === TYPES_OPTIONS.FOR_SOMEONE;

  const discount = isForSomeone
    ? plan.price * PERCENTAGE_DISCOUNT_FOR_SOMEONE
    : 0;

  const finalPrice = plan.price - discount;

  return (
    <div className="plan-card">
      <div className="plan-card__content-information">
        {hasClinic ? (
          <div className="plan-card__content-information__content-badge">
            <Badge type={TYPES_BADGES.PLAN}>Plan recomendado</Badge>
          </div>
        ) : null}
        <h2>{plan.name}</h2>
        <img width="56px" height="56px" src={urlImage} alt="Plan Image" />
      </div>
      <div className="plan-card__content-price">
        <p className="plan-card__content-price__title">COSTO DEL PLAN</p>
        {isForSomeone ? (
          <p className="plan-card__content-price__before-price">
            ${plan.price} antes
          </p>
        ) : null}

        <p className="plan-card__content-price__price">${finalPrice} al mes</p>
      </div>
      <div className="plan-card__content-description">
        <ul>
          {plan.description.map((text, i) => (
            <li key={`description_${i}`}>{text}</li>
          ))}
        </ul>
        <div>
          <Button
            onClick={() => {
              onClick({
                ...plan,
                price: finalPrice,
              });
            }}
            fullWidth
            primary
          >
            Seleccionar Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
