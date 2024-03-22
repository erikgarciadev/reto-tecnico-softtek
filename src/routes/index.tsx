import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PATHS } from "../utils/constants";
import Spinner from "../components/Spinner";
const Home = React.lazy(() => import("../pages/Home"));
const Plans = React.lazy(() => import("../pages/Plans"));
const Summary = React.lazy(() => import("../pages/Summary"));

const index = () => {
  return (
    <Routes>
      <Route
        path={PATHS.HOME}
        element={
          <React.Suspense
            fallback={
              <div className="center-full-page">
                <Spinner />
              </div>
            }
          >
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path={PATHS.PLANS}
        element={
          <React.Suspense
            fallback={
              <div className="center-full-page">
                <Spinner />
              </div>
            }
          >
            <Plans />
          </React.Suspense>
        }
      />
      <Route
        path={PATHS.SUMMARY}
        element={
          <React.Suspense
            fallback={
              <div className="center-full-page">
                <Spinner />
              </div>
            }
          >
            <Summary />
          </React.Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default index;
