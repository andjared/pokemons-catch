import { useQuery } from "react-query";
import PokemonService from "../services/pokedex";
import { PokemonShort } from "../services/pokedex/model";

const PokemonProvider = new PokemonService();

export const usePokemonList = () => {
  return useQuery({
    queryKey: ["list"],
    queryFn: PokemonProvider.getPokemonsList,
  });
};

const usePokemonData = (list: PokemonShort[]) => {
  return useQuery({
    queryKey: ["pokemon data"],
    queryFn: () => PokemonProvider.getPokemonData(list),
    enabled: !!list,
  });
};

export { usePokemonData };
