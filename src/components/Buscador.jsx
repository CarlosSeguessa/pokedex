import { React, useState } from "react";

const Buscador = ({ filtrarPokemon }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    filtrarPokemon(e.target.value);
  };

  return (
    <>
      <div className="px-[16px] sm:px-[38px] xl:px-[500px]">
        <input
          className="w-full text-center mt-8 px-4 py-2 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500"
          type="text"
          placeholder="🔎 Search"
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Buscador;
