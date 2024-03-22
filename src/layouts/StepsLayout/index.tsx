import React, { FC } from "react";
import Header from "../../components/Header";
import Steps from "./Steps";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
}

const StepsLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Steps />
      <div className="container-children">{children}</div>
    </>
  );
};

export default StepsLayout;
