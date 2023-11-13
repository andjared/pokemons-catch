import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import axios from "axios";
import { NavBar } from "./components/navbar";
import { Dashboard } from "./pages/dashboard";
import { Pokedex } from "./pages/pokedex";
import { Items } from "./pages/items";
import { Moves } from "./pages/moves";
import { useQuery } from "react-query";

function App() {
  async function getPokemonData(pokemons: any) {
    const promises = pokemons.map((pokemon: any) => axios.get(pokemon.url));
    return Promise.all(promises);
  }

  async function getPokemonsList() {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=50&limit=20`
    );
    const response = data.results;
    return response;
  }

  const { data: list } = useQuery({
    queryKey: ["pokemon list"],
    queryFn: getPokemonsList,
  });

  const { data: pokemons } = useQuery({
    queryKey: ["pokemons data"],
    queryFn: () => getPokemonData(list),
    enabled: !!list,
  });

  if (pokemons) pokemons.map((pokemon) => console.log(pokemon.data));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Dashboard />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/items" element={<Items />} />
        <Route path="/moves" element={<Moves />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
