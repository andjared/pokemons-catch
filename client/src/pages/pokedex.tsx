import PokemonCard from "../components/pokemonCard";
import { Loader } from "../components/loader/loader";
import { Pokemon } from "../services/pokedex/model";
import { usePokemonList, usePokemonData } from "../hooks/useQuery";

export interface IPokedex {
  pokemons: Pokemon[];
}
export function Pokedex() {
  const { data: list } = usePokemonList();
  const { data: pokemons, isLoading } = usePokemonData(list!);

  if (isLoading) {
    return (
      <section className="flex justify-center m-auto">
        <Loader />
      </section>
    );
  }
  return (
    <section className="grid grid-cols-list place-content-center gap-6 md:gap-4 p-6 lg:px-20 bg-slate-50 h-full">
      {pokemons?.map((pokemon: Pokemon) => {
        const { name, id, sprites, types } = pokemon;
        return (
          <PokemonCard name={name} sprites={sprites} key={id} types={types} />
        );
      })}
    </section>
  );
}
