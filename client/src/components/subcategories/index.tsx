import { usePokemonCategories } from "../../hooks/useQuery";
import { Link } from "react-router-dom";
import { Loader } from "../loader/loader";
import Card from "../card";

export interface ISubcategories {
  category: string;
}
const Subcategories = ({ category }: ISubcategories) => {
  const { data, isLoading } = usePokemonCategories(category);

  if (isLoading) {
    return (
      <section className="flex justify-center m-auto">
        <Loader />
      </section>
    );
  }
  console.log(category, data);

  return (
    <section className="grid grid-cols-list place-content-center gap-6 md:gap-4 p-6 lg:px-20 bg-slate-50">
      {data?.map((item, index) => {
        const { name } = item;
        return (
          <Link to={`/pokemons/${name}`} key={index}>
            <Card name={name} />
          </Link>
        );
      })}
    </section>
  );
};

export default Subcategories;
