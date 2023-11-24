import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Dashboard } from "./pages/dashboard";
import { Pokemons } from "./pages/pokemons";
import { Items } from "./pages/items";
import { Moves } from "./pages/moves";
import { PokemonDetails } from "./pages/pokemonDetails";
import { PokemonGroup } from "./pages/group";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Dashboard />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:group" element={<PokemonGroup />} />
        <Route path="/pokemons/:group/:param" element={<PokemonDetails />} />
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
