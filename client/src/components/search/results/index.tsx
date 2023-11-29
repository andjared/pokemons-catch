import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePokemonList } from "../../../hooks/useQuery";
import { Loader } from "../../loader/loader";

export interface ISearchResults {
  query: string;
}

export const SearchResults = ({ query }: ISearchResults) => {
  const { data, isLoading } = usePokemonList();
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      const filtered = data.filter((item) =>
        item.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  if (isLoading) {
    return (
      <section className="flex justify-center m-auto">
        <Loader />
      </section>
    );
  }

  return (
    <section className="absolute top-[100%] mt-2 w-full">
      {results.length > 0 && (
        <ul className="absolute top-[100%] mt-2 w-full px-2 py-2 max-h-[400px] bg-white rounded shadow overflow-auto ">
          {results.map((item, index) => (
            <li
              key={index}
              className="capitalize bg-gray-50 px-5 py-2 mt-1 md:mt-2 cursor-pointer hover:bg-gray-100 transition"
            >
              <Link to={`/pokemons/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
