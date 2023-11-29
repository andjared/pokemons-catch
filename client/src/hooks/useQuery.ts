import { useQuery } from "react-query";
import PokemonService from "../services/pokedex";
import ItemsService from "../services/items";

const PokemonProvider = new PokemonService();
const ItemsProvider = new ItemsService();

const usePokemonList = () => {
  return useQuery({
    queryKey: ["pokemon-list"],
    queryFn: () => PokemonProvider.getPokemonList(),
  });
};

const usePokemonCategories = (category: string) => {
  return useQuery({
    queryKey: [category, "pokemon-categories"],
    queryFn: () => PokemonProvider.getCategory(category),
    enabled: !!category,
  });
};

const usePokemonSubCategories = (category: string, subcategory: string) => {
  return useQuery({
    queryKey: [subcategory, "pokemon-categories"],
    queryFn: () => PokemonProvider.getSubcategoryResults(category, subcategory),
    enabled: !!subcategory,
  });
};

const usePokemonDetails = (param: string) => {
  return useQuery({
    queryKey: [param, "pokemon-details"],
    queryFn: () => PokemonProvider.getPokemonByParam(param),
  });
};

const useSpeciesData = (url: string) => {
  return useQuery({
    queryKey: [url, "species"],
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
  usePokemonList,
  usePokemonCategories,
  usePokemonSubCategories,
  usePokemonDetails,
  useSpeciesData,
  useItemsList,
  useItemsData,
};
