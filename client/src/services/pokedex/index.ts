import axios from "axios";
import { Pokemon, PokemonGroup, ResponseShort, Species } from "./model";

class PokemonService {
  async getCategory(category: string): Promise<PokemonGroup[]> {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/${category}/`);
    return data.results;
  }

  async getSubcategoryResults(category: string, subcategory: string) {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/${category}/${subcategory}`
    );

    if (category === "type") {
      return data.pokemon;
    }

    return data.pokemon_species;
  }

  async getPokemonsByGroup(group: string): Promise<ResponseShort[]> {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/egg-group/${group}`
    );
    return data.pokemon_species;
  }

  //param can be id or name
  async getPokemonByParam(param: string): Promise<Pokemon> {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${param}`
    );
    return data;
  }

  async getSpeciesData(url: string): Promise<Species> {
    const { data } = await axios.get(url);
    return data;
  }
}

export default PokemonService;
