import { FC } from "react";
import "./styles.scss";
import { classNames } from "../../utils/util";
import { TYPES_BADGES } from "../../utils/constants";
import { TypesBadgesValues } from "../../interfaces";

interface Props {
  children: React.ReactNode;
  type?: TypesBadgesValues;
}

const Badge: FC<Props> = ({ children, type = TYPES_BADGES.DEFAULT }) => {
  return (
    <span
      className={classNames(
        "badge",
        type === TYPES_BADGES.PLAN ? "badge--plan" : ""
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
