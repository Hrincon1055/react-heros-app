import { heroes } from "../data/heroes";
export const getHerosByName = (name = "") => {
  if (name === "") {
    return [];
  } else {
    return heroes.filter(
      (hero) =>
        hero.superhero.toLowerCase().includes(name.toLowerCase()) |
        hero.alter_ego.toLowerCase().includes(name.toLowerCase())
    );
  }
};
