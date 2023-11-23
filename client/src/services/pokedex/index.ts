import axios from "axios";
import { Pokemon, PokemonGroup, PokemonShort, Species } from "./model";

class PokemonService {
  async getPokemonGroups(): Promise<PokemonGroup[]> {
    const { data } = await axios.get("https://pokeapi.co/api/v2/egg-group/");
    return data.results;
  }

  async getPokemonsByGroup(group: string): Promise<PokemonShort[]> {
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
