import {Route , Routes} from 'react-router-dom';
import Home from './components/Home';
import PokemonDetails from './components/PokemonDetails';
import { getpokemones } from "./data/pokemones";
function App() {
  const pokemones = getpokemones();
  return (
      <Routes>
        <Route path="/" element={<Home pokemones={pokemones} />} />
        <Route path="/pokemondetails" element={<PokemonDetails pokemones={pokemones} />}> 
          <Route path=":pokemonId" element={<PokemonDetails  />} />
        </Route>
      </Routes>
  );
}

export default App;
