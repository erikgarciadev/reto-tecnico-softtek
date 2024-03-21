import React from "react";
import "./styles.scss";
import { classNames } from "../../utils/util";

interface Props {
  selected?: boolean;
  title: string;
  subTitle: string;
  imageUrl: string;
  onClick?: () => void;
}

const OptionCard: React.FC<Props> = ({
  selected = null,
  onClick = () => {},
  imageUrl,
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "option-card",
        selected ? "option-card--selected" : ""
      )}
    >
      <div className="option-card__top">
        <div
          className={classNames(
            "option-card__top__circle",
            selected ? "option-card__top__circle--selected" : ""
          )}
        >
          {selected ? (
            <img
              src="./icons/check.svg"
              height="10px"
              width="12px"
              alt="Icon check"
            />
          ) : null}
        </div>
      </div>
      <div className="option-card__bottom">
        <div className="option-card__bottom__content">
          <img src={imageUrl} height="32px" width="32px" alt="Option Image" />
          <h3>{props.title}</h3>
        </div>
        <p className="option-card__bottom__subTitle">{props.subTitle}</p>
      </div>
    </div>
  );
};

export default OptionCard;
