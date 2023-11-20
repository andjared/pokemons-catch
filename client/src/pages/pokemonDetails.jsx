import { useParams } from "react-router-dom";
import { usePokemonDetails } from "../hooks/useQuery";
import { Loader } from "../components/loader/loader";

export const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const { data, isLoading } = usePokemonDetails(pokemonId);

  if (isLoading) {
    return (
      <section className="flex justify-center m-auto">
        <Loader />
      </section>
    );
  }
  console.log(data);
  return <div>pokemonDetails {pokemonId}</div>;
};
