import axios from "axios";
import { Pokemon, ResponseShort, Species } from "./model";

class PokemonService {
  async getPokemonList(): Promise<string[]> {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?&limit=100`
    );

    const list = data.results.map((result: ResponseShort) => result.name);

    return list;
  }

  async getCategory(category: string): Promise<ResponseShort[]> {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/${category}/`);

    const results: ResponseShort[] = data.results;

    return results;
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

  //param can be id or name
  async getPokemonByParam(param: string): Promise<Pokemon> {
    const { data } = await axios.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${param}`
    );
    return data;
  }

  async getSpeciesData(url: string): Promise<Species> {
    const { data } = await axios.get<Species>(url);
    return data;
  }
}

export default PokemonService;
