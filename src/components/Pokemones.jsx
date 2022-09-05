import React from "react";
import { Outlet } from "react-router-dom";
import PokemonCard from "./PokemonCard";
const Pokemones = ({ pokemonesActuales, pokemones }) => {
  return (
    <>
      <main className="grid gap-3 grid-cols-3 auto-rows-max mt-[16px] px-[16px]">
        <PokemonCard pokemon={pokemones} pokemones={pokemonesActuales} />
      </main>
      <Outlet />
    </>
  );
};

export default Pokemones;
