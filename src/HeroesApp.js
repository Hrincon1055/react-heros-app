import React, { useEffect, useReducer } from "react";
// Mis componentes
import { AuthContext } from "./components/auth/authContext";
import { authReducer } from "./components/auth/authReducer";
import { AppRouter } from "./routes/AppRouter";
const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};
// Inicio
export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    if (!user) {
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
