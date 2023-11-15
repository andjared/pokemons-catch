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
import { usePokemonList, usePokemonData } from "./hooks/useQuery";

function App() {
  const { data: list } = usePokemonList();
  const { data: pokemons } = usePokemonData(list!);

  if (pokemons) console.log(pokemons);

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
