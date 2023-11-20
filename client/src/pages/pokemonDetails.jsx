import { useParams } from "react-router-dom";

export const PokemonDetails = () => {
  const { pokemonId } = useParams();
  return <div>pokemonDetails {pokemonId}</div>;
};
