import { useState } from "react";
import { SearchResults } from "./results";

export const Search = () => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trim());
  };

  return (
    <div className="relative flex flex-col gap-y-4 md:gap-y-6 md:items-center">
      <h5 className="text-center">Search pokemon by name</h5>
      <input
        type="text"
        placeholder="Type here..."
        className="pl-4 py-4 md:pr-32 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:gray-sky-500 block w-full rounded-md focus:ring-1"
        onChange={handleSearch}
      />
      {query && <SearchResults query={query} />}
    </div>
  );
};
