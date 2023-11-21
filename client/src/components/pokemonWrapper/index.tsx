import { PokemonHero } from "../pokemonHero";
import { Pokemon } from "../../services/pokedex/model";
import { useSpeciesData } from "../../hooks/useQuery";

export interface IPokemonWrapper {
  pokemon: Pokemon;
}

export const PokemonWrapper = ({ pokemon }: IPokemonWrapper) => {
  const {
    weight,
    height,
    abilities,
    stats,
    species,
    types,
    sprites,
    id,
    name,
  } = pokemon;

  const { data: speciesData } = useSpeciesData(species.url);
  const imgSrc = sprites.other["official-artwork"].front_shiny;
  const description = speciesData?.flavor_text_entries.filter(
    (entry) => entry.language.name === "en"
  )[0].flavor_text;

  return (
    <section>
      <PokemonHero
        imgSrc={imgSrc}
        name={name}
        types={types}
        id={id}
        description={description}
      />
    </section>
  );
};
