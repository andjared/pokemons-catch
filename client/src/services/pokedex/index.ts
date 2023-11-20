import axios from "axios";
import { Pokemon, PokemonList, PokemonShort } from "./model";

class PokemonService {
  async getPokemonData(list: PokemonShort[]) {
    const promises = list.map((pokemon: PokemonShort) =>
      axios.get(pokemon.url)
    );
    const response = await Promise.all(promises);
    const data: Pokemon[] = response.map((res) => res.data);
    return data;
  }

  async getPokemonsList(): Promise<PokemonShort[]> {
    const { data } = await axios.get<PokemonList>(
      `https://pokeapi.co/api/v2/pokemon?limit=151`
    );
    const response = data.results;
    return response;
  }
  //param can be id or name
  async getPokemonByParam(param: string): Promise<Pokemon> {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${param}`
    );
    return data;
  }
}

export default PokemonService;
