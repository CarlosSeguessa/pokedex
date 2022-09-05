import React, from "react";
import Pokemones from "./Pokemones";
import Buscador from "./Buscador";
import { useState, useEffect } from "react";
const Home = ({ pokemones }) => {
  const [pokemonesActuales, setPokemonesActuales] = useState(pokemones);
  const [newlist, setNewList] = useState(props.pokemones);
  const [flag, setFlag] = useState(true);

  const ordenar = () => {
    let sortedList;
    if (flag) {
      sortedList = [...newlist].sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
    } else {
      sortedList = [...newlist].sort((a, b) =>
        a.id > b.id ? 1 : a.id < b.id ? -1 : 0
      );
    }
    setNewList(sortedList);
    setFlag(!flag);
  };
   
  return (
    <>
      <header className="w-full flex flex-col">
        <div className="w-full flex items-center justify-between px-4">
          <div className="flex items-center  mt-9">
            <img className="w-10 mr-4" src="/img/Pokeball.png" alt="Pokeball" />
            <h1 className="font-bold text-3xl">Pokédex</h1>
          </div>
          <button onClick={ordenar}>
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
      <Pokemones pokemones={newlist} pokemonesActuales={pokemonesActuales} />

    </>
  );
};

export default Home;
