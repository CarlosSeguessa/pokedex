import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import PokemonDetails from "./components/PokemonDetails";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import AddPokemon from "./components/AddPokemon";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/" element={<Home />} />
      <Route path="/pokemondetails" element={<PokemonDetails />}>
        <Route path=":pokemonId" element={<PokemonDetails />} />
      </Route>
      <Route path="/addpokemon" element={<AddPokemon />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
export default App;
