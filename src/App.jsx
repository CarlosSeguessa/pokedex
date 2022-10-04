import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import PokemonDetails from "./components/PokemonDetails";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import AddPokemon from "./components/AddPokemon";

function App() {
  //traer pokemones desde mi api
  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(true);
  const redirect = useNavigate();
  const getpokemones = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/pokemones", {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      });
      if (response.status == 403) {
        redirect("/login");
      }
      if (localStorage.getItem("token") !== null) {
        const data = await response.json();
        setPokemones(data.data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getpokemones();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <Routes>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/" element={<Home pokemones={pokemones} />} />
      <Route
        path="/pokemondetails"
        element={<PokemonDetails pokemones={pokemones} />}
      >
        <Route path=":pokemonId" element={<PokemonDetails />} />
      </Route>
      <Route path="/addpokemon" element={<AddPokemon />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
export default App;
