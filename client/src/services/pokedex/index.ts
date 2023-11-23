import axios from "axios";
import { Pokemon, PokemonGroup, ResponseShort, Species } from "./model";

class PokemonService {
  async getGroups(): Promise<PokemonGroup[]> {
    const { data } = await axios.get("https://pokeapi.co/api/v2/egg-group/");
    return data.results;
  }

  async getPokemonsByGroup(group: string): Promise<ResponseShort[]> {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/egg-group/${group}`
    );
    return data.pokemon_species;
  }

  async getTypes(): Promise<ResponseShort[]> {
    const { data } = await axios.get("https://pokeapi.co/api/v2/type/");
    return data.results;
  }

  async getNatures(): Promise<ResponseShort[]> {
    const { data } = await axios.get("https://pokeapi.co/api/v2/nature/");
    return data.results;
  }

  async getShapes(): Promise<ResponseShort[]> {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon-shape/"
    );
    return data.results;
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
