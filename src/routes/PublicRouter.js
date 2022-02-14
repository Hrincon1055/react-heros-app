import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
// Mis componentes
import { AuthContext } from "../components/auth/authContext";
// Inicio
export const PublicRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  return !user.logged ? children : <Navigate to="/" />;
};
