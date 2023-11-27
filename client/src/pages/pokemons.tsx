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
  const [subcategory, setSubcategory] = useState<string>("");

  const categories = [
    { name: "type", id: 1 },
    { name: "egg-group", id: 2 },
    { name: "pokemon-shape", id: 3 },
  ];

  const handleCategory = (name: string) => {
    setCategory(name);
    setSubcategory("");
  };

  return (
    <section className="flex flex-col px-6 py-10 md:py-16 gap-y-6 md:gap-y-12 md:items-center">
      <Search />
      <section className="flex flex-col gap-y-4 md:gap-y-6 md:items-center">
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-6 flex-1">
          {categories.map((category) => {
            const { name, id } = category;
            return (
              <Button
                key={id}
                className="block bg-white rounded-md w-full"
                onClick={() => handleCategory(name)}
              >
                <span className="block whitespace-nowrap tracking-wide px-4 py-2 lg:px-6  md:py-4 text-center md:text-md">
                  {`Search by ${name}`}
                </span>
              </Button>
            );
          })}
        </div>
        {category && (
          <Subcategories
            category={category}
            setCategory={setCategory}
            subcategory={subcategory}
            setSubcategory={setSubcategory}
          />
        )}
      </section>
    </section>
  );
}
