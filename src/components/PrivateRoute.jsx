import React from "react";
import { Outlet, Navigate } from "react-router";
import { useAuthStatus } from "../Hooks/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return (
      <h3>
        <Spinner />
      </h3>
    );
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
