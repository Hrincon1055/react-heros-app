import React from "react";
// Mis componentes
import { HeroList } from "../hero/HeroList";
// Inicio
export const DcScreen = () => {
  return (
    <div>
      <h1>Dc Screen</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
};
