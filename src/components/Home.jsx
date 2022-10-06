import React from "react";
import Pokemones from "./Pokemones";
import Buscador from "./Buscador";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPokemones } from "../data/api";
import Loading from "./Loading/Loading";
const Home = () => {
  const [pokemones, setPokemones] = useState([]);
  const [newList, setNewList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(true);
  const obtenerPokemones = async () => {
    try {
      const response = await getPokemones();
      setPokemones(response);
      setNewList(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    obtenerPokemones();
  }, []);

  const ordenar = () => {
    let sortedList;
    if (flag) {
      sortedList = [...newList].sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
    } else {
      sortedList = [...newList].sort((a, b) =>
        a.id > b.id ? 1 : a.id < b.id ? -1 : 0
      );
    }
    setNewList(sortedList);
    setFlag(!flag);
  };

  const filtrarPokemon = (value) => {
    if (value === "") {
      setNewList(pokemones);
      return;
    }
    const pokemonesClone = [...pokemones];
    const listaFiltrada = pokemonesClone.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase());
    });

    setNewList(listaFiltrada);
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
            <div className="flex items-center pl-6 flex-wrap">
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
        {loading ? <Loading /> : <Buscador filtrarPokemon={filtrarPokemon} />}
      </header>
      <Pokemones pokemones={newList} loading={loading} />
    </>
  );
};

export default Home;
