export type PokeResponse = {
  data?: Pokemon[];
};

export type PokemonShort = {
  name: string;
  url: string;
};

export type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: PokemonShort[];
};

export interface Pokemon {
  name: string;
  id: number;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  order: number;
  abilities: [];
  forms: [];
  game_indices: [];
  held_items: [];
  location_area_encounters: string;
  moves: [];
  past_types: [];
  sprites: [];
  species: [];
  types: [];
}
