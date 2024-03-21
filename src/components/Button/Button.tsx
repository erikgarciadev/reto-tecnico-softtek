import { FC } from "react";
import "./styles.scss";
import { classNames } from "../../utils/util";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  primary?: boolean;
  fullWidth?: boolean;
}

const Button: FC<Props> = ({
  children,
  onClick = () => {},
  type = "button",
  primary = false,
  fullWidth = false,
}) => {
  return (
    <button
      className={classNames(
        "button",
        primary ? "button--primary" : "",
        fullWidth ? "button--fullWidth" : ""
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
