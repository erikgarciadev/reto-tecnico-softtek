import React, { FC, forwardRef } from "react";
import "./styles.scss";
import { classNames } from "../../utils/util";

interface Props {
  label: string;
  border?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, onChange, border = true, ...props }, ref) => {
    return (
      <div
        className={classNames(
          "container-input",
          border ? "container-input--border" : ""
        )}
      >
        <label className="container-input__label">{label}</label>
        <input
          ref={ref}
          className="container-input__input"
          onChange={onChange}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
