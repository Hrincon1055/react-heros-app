import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
// Mis componentes
import { getHerosByName } from "../../selectors/getHerosByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";

// Inicio
export const SearchScreen = () => {
  // hooks
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  // state
  const [{ searchText }, handleInputChange] = useForm({
    searchText: q,
  });
  const herosFilted = useMemo(() => getHerosByName(q), [q]);
  // funciones
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };
  // render
  return (
    <>
      <h1>Búsquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary mt-1">Buscar...</button>
          </form>
        </div>
        <div className="col-5">
          <h4>Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Buscar un héroe</div>
          ) : (
            herosFilted.length === 0 && (
              <div className="alert alert-danger">
                No hay resultados de busqueda con : {q}
              </div>
            )
          )}
          {herosFilted.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
