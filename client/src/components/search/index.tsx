import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 md:items-center">
      <h5>Search pokemon by name</h5>
      <input
        type="text"
        placeholder="Type here..."
        className="pl-4 pr-18 py-4 md:pr-32 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:gray-sky-500 block w-full rounded-md focus:ring-1"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
