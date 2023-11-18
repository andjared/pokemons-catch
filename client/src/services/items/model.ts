export interface ItemShort {
  name: string;
  url: string;
}

export interface Item {
  name: string;
  id: number;
  sprites: { default: string };
  attributes: [{ name: string; url: string }];
  effect_entries: [{ effect: string; short_effect: string }];
  held_by_pokemon: [{ pokemon: { name: string; url: string } }];
}
