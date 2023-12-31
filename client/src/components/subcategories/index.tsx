import { usePokemonCategories } from "../../hooks/useQuery";
import { Loader } from "../loader/loader";
import { Card } from "../card";
import { Button } from "../button";
import Pokemons from "./pokemons";

export interface ISubcategories {
  category: string;
  subcategory: string;
  setSubcategory: (subcategory: string) => void;
}
const Subcategories = ({
  category,
  subcategory,
  setSubcategory,
}: ISubcategories) => {
  const { data, isLoading } = usePokemonCategories(category);

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

  return !subcategory ? (
    <section className="grid grid-cols-list place-content-center gap-4 md:gap-4 py-4 px-4 lg:px-8 lg:py-6 w-full bg-white">
      {data?.map((item, index) => {
        const { name } = item;
        return (
          <Button onClick={() => handleSubcategory(name)} key={index}>
            <Card name={name} />
          </Button>
        );
      })}
    </section>
  ) : (
    <Pokemons category={category} subcategory={subcategory} />
  );
};

export default Subcategories;
