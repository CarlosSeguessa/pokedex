import React from "react";

const Home = () => {
  return (
    <>
      <header className="w-full px-6 flex flex-col">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center  mt-9">
            <img className="w-10 mr-4" src="/img/Pokeball.png" alt="Pokeball" />
            <h1 className="font-bold text-3xl">Pokédex</h1>
          </div>
          <button>
            <div className="mt-8 flex items-center justify-center">
              <p>#</p>
              <img className="w-4" src="/icons/Arrow.svg" alt="Filtered by id" />
            </div>
          </button>
        </div>
        <div>
            <input className="w-full text-center mt-8 px-4 py-2 h-10 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500" type="text" placeholder="🔎 Buscar"/>
        </div>
      </header>
    </>
  );
};

export default Home;
