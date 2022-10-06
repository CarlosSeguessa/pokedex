import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Loading from "./Loading/Loading";

const Pokemones = ({ pokemones, loading }) => {
  return (
    <>
      <main className="grid gap-3 grid-cols-3 auto-rows-max mt-[16px] px-[16px] place-items-center lg:px-32 xl:px-64 ">
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <PokemonCard pokemon={pokemones} />
        )}
      </main>
      <Outlet />
    </>
  );
};

export default Pokemones;
