import React from "react";

const Buscador = ({ setPokemonesActuales, pokemones }) => {
  const filtrarPokemon = (e) => {
    const listaFiltrada = pokemones.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setPokemonesActuales(listaFiltrada);
  };
  return (
    <>
      <div className="px-[16px] sm:px-[38px] xl:px-[500px]">
        <input
          className="w-full text-center mt-8 px-4 py-2 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500"
          type="text"
          placeholder="🔎 Search"
          onChange={filtrarPokemon}
        />
      </div>
    </>
  );
};

export default Buscador;
