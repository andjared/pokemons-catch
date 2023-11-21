import { useParams } from "react-router-dom";
import { usePokemonDetails, useSpeciesData } from "../hooks/useQuery";
import { Loader } from "../components/loader/loader";
import { PokemonHero } from "../components/pokemonHero";

export const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const { data: pokemon, isLoading } = usePokemonDetails(pokemonId);
  const { data: speciesData } = useSpeciesData(pokemon?.species.url);

  if (isLoading) {
    return (
      <section className="flex justify-center m-auto">
        <Loader />
      </section>
    );
  }
  console.log(speciesData);

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

  const imgSrc = sprites.other["official-artwork"].front_shiny;

  const description = speciesData?.flavor_text_entries.filter(
    (entry) => entry.language.name === "en"
  )[0].flavor_text;

  return (
    <section className="flex flex-col px-4 md:px-8">
      <PokemonHero
        imgSrc={imgSrc}
        id={id}
        types={types}
        name={name}
        description={description}
      />
    </section>
  );
};
