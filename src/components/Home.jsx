import React from "react";
import { useState } from "react";
import Pokemones from "./Pokemones";
import Buscador from "./Buscador";
const Home = ({ pokemones }) => {
  const [pokemonesActuales, setPokemonesActuales] = useState(pokemones);
  return (
    <>
      <header className="w-full flex flex-col">
        <div className="w-full flex items-center justify-between px-4">
          <div className="flex items-center  mt-9">
            <img className="w-10 mr-4" src="/img/Pokeball.png" alt="Pokeball" />
            <h1 className="font-bold text-3xl">Pokédex</h1>
          </div>
          <button>
            <div className="mt-8 flex items-center justify-center">
              <p>#</p>
              <img
                className="w-4"
                src="/icons/Arrow.svg"
                alt="Filtered by id"
              />
            </div>
          </button>
        </div>
        <Buscador
          pokemones={pokemones}
          pokemonesActuales={pokemonesActuales}
          setPokemonesActuales={setPokemonesActuales}
        />
      </header>
      <Pokemones pokemonesActuales={pokemonesActuales} />
    </>
  );
};

export default Home;
