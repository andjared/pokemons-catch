import { useState } from "react";
import { usePokemonCategories } from "../../hooks/useQuery";
import { Loader } from "../loader/loader";
import Card from "../card";
import { Button } from "../button";
import Pokemons from "./pokemons";

export interface ISubcategories {
  category: string;
}
const Subcategories = ({ category }: ISubcategories) => {
  const { data, isLoading } = usePokemonCategories(category);
  const [subcategory, setSubcategory] = useState<string>("");

  if (isLoading) {
    return (
      <section className="flex justify-center m-auto">
        <Loader />
      </section>
    );
  }
  const handleSubcategory = (name: string) => {
    setSubcategory(name);
  };

  return (
    <section className="grid grid-cols-list place-content-center gap-4 md:gap-4 py-4 px-6 lg:px-8 lg:py-6 w-full bg-white ">
      {data?.map((item, index) => {
        const { name } = item;
        return (
          <Button onClick={() => handleSubcategory(name)} key={index}>
            <Card name={name} />
          </Button>
        );
      })}
      {subcategory && (
        <Pokemons category={category} subcategory={subcategory} />
      )}
    </section>
  );
};

export default Subcategories;
