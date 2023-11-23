import { UseQueryResult, useQuery } from "react-query";
import { PokemonShort, Pokemon, Species } from "../services/pokedex/model";
import PokemonService from "../services/pokedex";
import ItemsService from "../services/items";

const PokemonProvider = new PokemonService();
const ItemsProvider = new ItemsService();

const usePokemonGroups = () => {
  return useQuery({
    queryKey: ["pokemon groups"],
    queryFn: PokemonProvider.getPokemonGroups,
  });
};

const usePokemonList = (group: string) => {
  return useQuery({
    queryKey: ["pokemon list"],
    queryFn: () => PokemonProvider.getPokemonsByGroup(group),
  });
};

const usePokemonDetails = (param: string) => {
  return useQuery({
    queryKey: ["pokemon details"],
    queryFn: () => PokemonProvider.getPokemonByParam(param),
  });
};

const useSpeciesData = (url: string) => {
  return useQuery({
    queryKey: ["species"],
    queryFn: () => PokemonProvider.getSpeciesData(url),
    enabled: !!url,
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

export {
  usePokemonGroups,
  usePokemonList,
  usePokemonDetails,
  useSpeciesData,
  useItemsList,
  useItemsData,
};
