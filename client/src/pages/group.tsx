import { Link, useParams } from "react-router-dom";
import { Loader } from "../components/loader/loader";
import { usePokemonList } from "../hooks/useQuery";
import Card from "../components/card";

export const PokemonGroup = () => {
  const { group } = useParams();
  const { data, isLoading } = usePokemonList(group!);

  if (isLoading) {
    return (
      <section className="flex justify-center m-auto">
        <Loader />
      </section>
    );
  }

  return (
    <section className="grid grid-cols-list place-content-center gap-6 md:gap-4 p-6 lg:px-20 bg-slate-50 h-full">
      {data?.map((item, index) => {
        return (
          <Link to={`/pokemons/${group}/${item.name}`} key={index}>
            <Card name={item.name} />
          </Link>
        );
      })}
    </section>
  );
};
