import { useState } from "react";
import { Pokemon } from "../services/pokedex/model";
import { Button } from "../components/button";
import Subcategories from "../components/subcategories";

export interface IPokemons {
  pokemons: Pokemon[];
}

export function Pokemons() {
  const [category, setCategory] = useState<string>("");

  const categories = [
    { name: "type", id: 1 },
    { name: "egg-group", id: 2 },
    { name: "pokemon-shape", id: 3 },
  ];

  return (
    <>
      {/* search by name */}
      {/* filter by categories */}
      <section className="flex flex-col items-center gap-6 md:gap-4 p-6 lg:px-20 bg-slate-50 h-full">
        <h4>Categories</h4>
        <div className="flex flex-col gap-y-4 ">
          {categories.map((category) => {
            const { name, id } = category;
            return (
              <Button
                key={id}
                className="bg-white capitalize p-4"
                onClick={() => setCategory(name)}
              >
                {name}
              </Button>
            );
          })}
        </div>
        {category && <Subcategories category={category} />}
      </section>
    </>
  );
}
