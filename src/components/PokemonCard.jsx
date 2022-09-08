import React from "react";
import { Link } from "react-router-dom";
const PokemonCard = (props) => {
  return (
    <>
      {props.pokemon.map((pokemon, i) => (
        <Link
          to={`/pokemondetails/${pokemon.id}`}
          key={i}
          className="
          cursor-pointer 
          flex 
          flex-col 
          w-[117px] 
          h-[122px] 
          xl:w-[172px] 
          xl:h-[172px] 
          bg-[#FFFFFF] 
          border-[1px] 
          border-solid 
          border-[#B8B8B8] 
          rounded-lg 
          xl:transition xl:ease-in-out xl:delay-150
          xl:hover:-translate-y-1
          xl:duration-300
          "
          style={{ borderColor: pokemon.cardColor }}
        >
          <div className="w-full flex justify-end pr-2">
            <p style={{ color: pokemon.cardColor }}>#00{pokemon.id}</p>
          </div>
          <div className="w-full flex justify-center items-center xl:mt-4">
            <img
              className="w-[72px] h-[72px] xl:w-[82px] xl:h-[82px]"
              src={pokemon.img}
              alt={pokemon.name}
            />
          </div>
          <div
            className="w-full  rounded-b-lg xl:mt-6"
            style={{ backgroundColor: pokemon.cardColor }}
          >
            <p className="text-center text-white">{pokemon.name}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default PokemonCard;
