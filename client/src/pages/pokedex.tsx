import PokemonCard from "../components/pokemonCard";
import { Pokemon } from "../services/pokedex/model";
export interface IPokedex {
  pokemons: Pokemon[];
}
export function Pokedex({ pokemons }: IPokedex) {
  return (
    <section className="grid grid-cols-list place-content-center gap-6 md:gap-4 p-6 lg:px-20 bg-slate-50 h-full">
      {pokemons?.map((pokemon) => {
        const { name, id, sprites, types } = pokemon;
        return (
          <PokemonCard name={name} sprites={sprites} key={id} types={types} />
        );
      })}
    </section>
  );
}
