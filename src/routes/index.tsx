import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { PATHS } from "../utils/constants";
import Plans from "../pages/Plans";
import Summary from "../pages/Summary";

const index = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.PLANS} element={<Plans />} />
      <Route path={PATHS.SUMMARY} element={<Summary />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default index;
