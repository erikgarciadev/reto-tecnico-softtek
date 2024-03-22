import { FC } from "react";
import "./styles.scss";

interface Props {
  data: {
    username: string;
    dni: string;
    cellphoneNumber: string;
    plan: string;
    price: number;
  };
}

const SummaryCard: FC<Props> = ({ data }) => {
  return (
    <div className="summary-card">
      <div className="summary-card__user-information">
        <span>PRECIOS CALCULADOS PARA:</span>
        <div>
          <img
            width={"24px"}
            height={"24px"}
            src="./icons/person.svg"
            alt="Person icon"
          />
          <p>{data.username}</p>
        </div>
      </div>
      <div className="summary-card__responsible_payment">
        <p className="title">Responsable de pago</p>
        <p className="sub-title">DNI: {data.dni}</p>
        <p className="sub-title">Celular: {data.cellphoneNumber}</p>
      </div>
      <div>
        <p className="title">Plan elegido</p>
        <p className="sub-title">{data.plan}</p>
        <p className="sub-title">Costo del Plan: ${data.price} al mes</p>
      </div>
    </div>
  );
};

export default SummaryCard;
