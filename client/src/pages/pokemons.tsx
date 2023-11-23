import { Loader } from "../components/loader/loader";
import { Pokemon } from "../services/pokedex/model";
import { usePokemonGroups } from "../hooks/useQuery";
import { Link } from "react-router-dom";
import Card from "../components/card";

export interface IPokemons {
  pokemons: Pokemon[];
}

export function Pokemons() {
  const { data: groups, isLoading } = usePokemonGroups();

  if (isLoading) {
    return (
      <section className="flex justify-center m-auto">
        <Loader />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-list place-content-center gap-6 md:gap-4 p-6 lg:px-20 bg-slate-50 h-full">
      {groups?.map((group, index) => {
        const { name } = group;
        return (
          <Link to={`/pokemons/${name}`} key={index}>
            <Card name={name} />
          </Link>
        );
      })}
    </section>
  );
}
