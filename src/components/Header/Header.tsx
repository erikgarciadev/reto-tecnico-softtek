import React from "react";
import { PHONE_NUMBER } from "../../utils/constants";
import "./styles.scss";
import { classNames } from "../../utils/util";

interface Props {
  transparent?: boolean;
}

const Header: React.FC<Props> = ({ transparent = false }) => {
  return (
    <header
      className={classNames("header", transparent ? "header--transparent" : "")}
    >
      <nav className="container header-nav">
        <img
          className="header-nav__logo"
          width="65px"
          height="32px"
          src="./images/logo.svg"
          alt="Logo"
        />
        <ul className="header-nav__information">
          <li>¡Compra por este medio!</li>
          <li>
            <img
              width="20px"
              height="20px"
              src="./icons/phone.svg"
              alt="Phone Icon"
            />
            <p>{PHONE_NUMBER}</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
