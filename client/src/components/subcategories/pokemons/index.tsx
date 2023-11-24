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
    <section>
      {data.map((item: any, index: number) => {
        const { name } = category === "type" ? item.pokemon : item;
        return (
          <Link to={`/pokemons/${category}/${name}`} key={index}>
            <Card name={name} />
          </Link>
        );
      })}
      <div>{data.length}</div>
    </section>
  );
};

export default Pokemons;
