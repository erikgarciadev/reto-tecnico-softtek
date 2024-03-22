import { forwardRef } from "react";
import "./styles.scss";

interface Props {
  checked?: boolean;
  onChange?: (e: any) => void;
}

const CheckBox = forwardRef<HTMLInputElement, Props>(
  ({ checked, onChange, ...props }, ref) => {
    return (
      <input
        ref={ref}
        onClick={onChange}
        checked={checked}
        className="checkbox"
        type="checkbox"
        {...props}
      />
    );
  }
);

export default CheckBox;
