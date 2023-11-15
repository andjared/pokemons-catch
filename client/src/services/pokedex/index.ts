import axios from "axios";
import { PokeResponse, PokemonList, PokemonShort } from "./model";

class PokemonService {
  async getPokemonData(list: PokemonShort[]): Promise<PokeResponse[]> {
    const promises = list.map((pokemon: PokemonShort) =>
      axios.get(pokemon.url)
    );
    const response = Promise.all(promises);
    return response;
  }

  async getPokemonsList(): Promise<PokemonShort[]> {
    const { data } = await axios.get<PokemonList>(
      `https://pokeapi.co/api/v2/pokemon?offset=50&limit=20`
    );
    const response = data.results;
    return response;
  }
}

export default PokemonService;
