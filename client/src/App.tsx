import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Dashboard, Pokemons, Items, Moves, PokemonDetails } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Dashboard />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:param" element={<PokemonDetails />} />
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
