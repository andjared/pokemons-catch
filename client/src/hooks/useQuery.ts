import { useQuery } from "react-query";
import PokemonService from "../services/pokedex";
import ItemsService from "../services/items";

const PokemonProvider = new PokemonService();
const ItemsProvider = new ItemsService();

const usePokemonCategories = (category: string) => {
  return useQuery({
    queryKey: ["pokemon-groups"],
    queryFn: () => PokemonProvider.getCategory(category),
  });
};

// const usePokemonTypes = () => {
//   return useQuery({
//     queryKey: ["pokemon-types"],
//     queryFn: PokemonProvider.getTypes,
//   });
// };

// const usePokemonNatures = () => {
//   return useQuery({
//     queryKey: ["pokemon-natures"],
//     queryFn: PokemonProvider.getNatures,
//   });
// };

// const usePokemonShapes = () => {
//   return useQuery({
//     queryKey: ["pokemon-shapes"],
//     queryFn: PokemonProvider.getShapes,
//   });
// };

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
  usePokemonCategories,
  usePokemonList,
  usePokemonDetails,
  useSpeciesData,
  useItemsList,
  useItemsData,
};
