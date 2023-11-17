import { useQuery } from "react-query";
import { PokemonShort } from "../services/pokedex/model";
import PokemonService from "../services/pokedex";
import ItemsService from "../services/items";

const PokemonProvider = new PokemonService();
const ItemsProvider = new ItemsService();

const usePokemonList = () => {
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

const useItemsList = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: ItemsProvider.getItemsList,
  });
};

const useItemsData = (list: any) => {
  return useQuery({
    queryKey: ["item data"],
    queryFn: () => ItemsProvider.getItemsData(list),
    enabled: !!list,
  });
};

export { usePokemonData, usePokemonList, useItemsList, useItemsData };
