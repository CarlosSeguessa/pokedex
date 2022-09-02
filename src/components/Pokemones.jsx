import React from "react";
import { Link, Outlet } from "react-router-dom";

const Pokemones = (props) => {
  return (
    <>
      <main className="grid gap-3 grid-cols-3 auto-rows-max mt-[16px] px-[16px]">
        {props.pokemones.map((pokemon, i) => (
          <Link
            to={`/pokemondetails/${pokemon.id}`}
            key={i}
            className="cursor-pointer flex flex-col w-[117px] h-[122px] bg-[#FFFFFF] border-[1px] border-solid border-[#B8B8B8] rounded-lg"
            style={{ borderColor: pokemon.cardColor }}
          >
            <div className="w-full flex justify-end pr-2">
              <p style={{ color: pokemon.cardColor }}>#{pokemon.id}</p>
            </div>
            <div className="w-full flex justify-center items-center">
              <img
                className="w-[72px] h-[72px]"
                src={pokemon.img}
                alt={pokemon.name}
              />
            </div>
            <div
              className="w-full  rounded-b-lg"
              style={{ backgroundColor: pokemon.cardColor }}
            >
              <p className="text-center text-white">{pokemon.name}</p>
            </div>
          </Link>
        ))}
      </main>
        <Outlet />
    </>
  );
};

export default Pokemones;
