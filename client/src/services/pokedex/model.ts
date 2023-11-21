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

export interface PokemonType {
  type: { name: string; url: string };
}

export interface Pokemon {
  name: string;
  id: number;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  abilities: [];
  forms: [];
  game_indices: [];
  held_items: [item: { name: string; url: string }];
  location_area_encounters: string;
  past_types: [];
  sprites: { other: { "official-artwork": { front_default: string } } };
  species: { name: string; url: string };
  types: PokemonType[];
  moves: [{ move: { name: string; url: string } }];
  order: number;
  stats: [{ base_stat: number; stat: { name: string } }];
}

export interface Species {
  flavor_text_entries: [{ flavor_text: string; language: { name: string } }];
  egg_groups: [{ name: string; url: string }];
  habitat: { name: string };
  evolution_chain: { url: string };
}
