export type ResponseShort = {
  name: string;
  url: string;
};

export interface PokemonType {
  type: ResponseShort;
}

export type PokemonAbility = {
  [key: string]: ResponseShort;
};

export type PokemonStats = {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
};

export interface Pokemon {
  name: string;
  id: number;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;
  abilities: PokemonAbility[];
  forms: [];
  game_indices: [];
  held_items: [item: { name: string; url: string }];
  location_area_encounters: string;
  sprites: {
    other: {
      "official-artwork": { front_default: string; front_shiny: string };
    };
  };
  species: { name: string; url: string };
  types: PokemonType[];
  moves: [{ move: { name: string; url: string } }];
  order: number;
  stats: PokemonStats[];
}

export interface Species {
  flavor_text_entries: [{ flavor_text: string; language: { name: string } }];
  egg_groups: ResponseShort[];
  evolution_chain: { url: string };
  shape: ResponseShort;
  habitat: ResponseShort;
}
