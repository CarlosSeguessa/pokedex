
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PokemonDetails from "./components/PokemonDetails";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
//import AddPokemon from "./components/AddPokemon";

function App() {

 //traer pokemones desde mi api
  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getpokemones = async () => {
try {
  const response = await fetch("http://localhost:3000/api/pokemones");
  const data = await response.json();
  setPokemones(data.data);
  setLoading(false);
} catch (error) {
  console.error(error)
}
    // try {
    //   const response = await fetch("http://localhost:3000/api/pokemones");

    //   if (!response.ok) {
    //     throw new Error("Error en la peticion");
    //   }
    //     const responsefetch = await response.json();
      
    //     setPokemones(responsefetch.data);
    //     console.log(pokemones)
        
    //   }catch (error) {
    //   console.error(error)
    // }
  };

  


    

useEffect(() => {
    getpokemones();
}, []);

//mientras no carguen los pokemones, mostrar un loading
if (loading) {
  return <h1>Loading...</h1>;
} else {
  return (
    <Routes>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/" element={<Home pokemones={pokemones} />} />
      <Route
        path="/pokemondetails"
        element={<PokemonDetails pokemones={pokemones} />}
      >
        <Route path=":pokemonId" element={<PokemonDetails />} />
      </Route>
      {/*<Route path="/addpokemon" element={<AddPokemon />} />*/}
      <Route path="/login"  element={<Login />} />
      <Route path="/register" element= {<Register/>}/>
    </Routes>
  );
}
}
export default App;
