import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import PokemonDetails from "./components/PokemonDetails";
import { getpokemones } from "./data/pokemones";

function App() {
  let pokemones = getpokemones();
  return (
    <Routes>
      <Route path="/" element={<Home pokemones={pokemones} />} />
      <Route
        path="/pokemondetails"
        element={<PokemonDetails pokemones={pokemones} />}
      >
        <Route path=":pokemonId" element={<PokemonDetails />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
