import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
// Mis componentes
import { getHeroById } from "../../selectors/getHeroById";
// import batman from "../../assets/dc-batman.jpg";
const heroImages = require.context(`../../assets/`, true);
// Inicio
export const HeroScreen = () => {
  // hooks
  const { heroId } = useParams();
  const navigate = useNavigate();
  // constantes
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  // funciones
  const handleReturn = () => {
    navigate(-1);
  };
  // render
  if (!hero) {
    return <Navigate to="/" />;
  }
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  const imagePath = `/assets/${id}.jpg`; // desde assest public

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={heroImages(`./${id}.jpg`)}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInLeft">
        <h3>{hero.superhero}</h3>
        <ul className="list-group ">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-primary" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
