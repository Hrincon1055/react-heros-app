import React from "react";
// Mis componentes
import { HeroList } from "../hero/HeroList";
// Inicio
export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel Screen</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
