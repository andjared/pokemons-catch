import { useParams } from "react-router-dom";
import { usePokemonDetails } from "../hooks/useQuery";
import { Loader } from "../components/loader/loader";
import { PokemonWrapper } from "../components/pokemonWrapper";

export const PokemonDetails = () => {
  const { param } = useParams();
  const { data: pokemon, isLoading } = usePokemonDetails(param!);
  console.log(pokemon);

  if (isLoading) {
    return (
      <section className="flex justify-center m-auto">
        <Loader />
      </section>
    );
  }

  return <PokemonWrapper pokemon={pokemon!} />;
};
