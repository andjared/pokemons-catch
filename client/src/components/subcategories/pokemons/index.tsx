import { Link } from "react-router-dom";
import { usePokemonSubCategories } from "../../../hooks/useQuery";
import Card from "../../card";
import { Loader } from "../../loader/loader";
import { ResponseShort } from "../../../services/pokedex/model";

export interface IPokemons {
  category: string;
  subcategory: string;
}
const Pokemons = ({ category, subcategory }: IPokemons) => {
  const { data, isLoading } = usePokemonSubCategories(category, subcategory);

  if (isLoading) {
    return (
      <section className="flex justify-center m-auto">
        <Loader />
      </section>
    );
  }
  return (
    <section className="grid grid-cols-list place-content-center gap-4 md:gap-4 py-4 px-6 lg:px-8 lg:py-6 w-full bg-white">
      {data.map((item: any, index: number) => {
        const { name } = category === "type" ? item.pokemon : item;
        return (
          <Link to={`/pokemons/${subcategory}/${name}`} key={index}>
            <Card name={name} />
          </Link>
        );
      })}
    </section>
  );
};

export default Pokemons;
