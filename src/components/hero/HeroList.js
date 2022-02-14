import React, { useMemo } from "react";
// Mis componentes
import { getHerosByPublisher } from "../../selectors/getHerosByPublisher";
import { HeroCard } from "./HeroCard";
// Inicio
export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHerosByPublisher(publisher), [publisher]);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};
