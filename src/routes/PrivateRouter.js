import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
// Mis componentes
import { AuthContext } from "../components/auth/authContext";
// Inicio
export const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  localStorage.setItem("lastPath", pathname + search);

  return user.logged ? children : <Navigate to="login" />;
};
