import { useState } from "react";
import { Pokemon } from "../services/pokedex/model";
import { Button } from "../components/button";
import Subcategories from "../components/subcategories";
import Search from "../components/search";

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
    <section className="flex flex-col px-6 py-10 md:py-16 gap-y-6 md:gap-y-12 md:items-center">
      {/* search by name */}
      {/* filter by categories */}
      <div>
        <Search />
      </div>

      <section className="flex flex-col gap-y-4 md:gap-y-6 md:items-center">
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-6">
          {categories.map((category) => {
            const { name, id } = category;
            return (
              <Button
                key={id}
                className="block bg-white  w-full"
                onClick={() => setCategory(name)}
              >
                <span className="block whitespace-nowrap tracking-wide px-4 py-4 md:px-8  md:py-6 text-center md:text-md">
                  {`Search by ${name}`}
                </span>
              </Button>
            );
          })}
        </div>
        {category && <Subcategories category={category} />}
      </section>
    </section>
  );
}
