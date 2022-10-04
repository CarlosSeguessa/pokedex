import React from "react";
import Pokemones from "./Pokemones";
import Buscador from "./Buscador";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = ({ pokemones }) => {
  const [newlist, setNewList] = useState(pokemones);
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

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <header className="w-full flex flex-col">
        <div className="w-full flex items-center justify-between px-4 xl:px-[120px]">
          <div className="flex items-center  mt-9">
            <img className="w-10 mr-4" src="/img/Pokeball.png" alt="Pokeball" />
            <h1 className="font-bold text-3xl">Pokédex</h1>
            <div className="flex items-center pl-8 flex-wrap">
              {localStorage.getItem("token") == null ? (
                <Link
                  to="/login"
                  className="w-30 text-white bg-red-500 rounded-lg px-5"
                >
                  Log in
                </Link>
              ) : (
                <button
                  onClick={logOut}
                  className="w-30 text-white bg-red-500 rounded-lg px-5"
                >
                  Log out
                </button>
              )}
            </div>
          </div>
          <button onClick={ordenar}>
            <div className="mt-8 flex h-1 items-center justify-center">
              {flag ? (
                <p>#</p>
              ) : (
                <div className="flex">
                  <p className="">A-</p>
                  <p>Z</p>
                </div>
              )}
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
          pokemonesActuales={newlist}
          setPokemonesActuales={setNewList}
        />
      </header>
      <Pokemones pokemones={newlist} />
    </>
  );
};

export default Home;
