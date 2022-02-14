import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
// Mis componentes
import { types } from "../types/types";
// Inicio
export const LoginScreen = () => {
  // hooks
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  // funciones
  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {
        name: "Henry Rincon",
      },
    };
    dispatch(action);
    const lastPath = localStorage.getItem("lastPath") || "/marvel";
    navigate(lastPath, { replace: true });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
