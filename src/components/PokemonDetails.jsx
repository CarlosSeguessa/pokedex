import React from "react";

const PokemonDetails = () => {
  return (
    <>
      <main className="bg-[#74CB48] w-full h-screen">
        <div className="flex justify-between px-4">
          <div className="flex items-center text-white mx-4 pt-7 z-10">
            <i class="fa-solid fa-arrow-left-long text-white mr-4"></i>
            <p className="font-bold">Bulbasaur</p>
          </div>

          <div className="mt-9 text-white font-bold">
            <p>#001</p>
          </div>
        </div>

        <img
          src="/img/Pokeball.png"
          className="opacity-10 absolute z-0 top-3 right-4"
          alt=""
        />
        <img src="/img/bulbasaur.png " alt="" />

        <section className="card-container w-full bg-white   ">
          <div className="text-white flex justify-center pt-4  w-full">
            <span className="bg-[#74CB48]">Grass</span>
            <span className="bg-[#A43E9E]">Poison</span>
          </div>
          <div className=" text-[#74CB48] flex justify-center">
            <span>About</span>
          </div>

          <div className="grid grid-cols-3 w-full ">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex">
                  <img src="/icons/weight.svg" alt="" />
                  <span>6.9kg</span>
                </div>
                <span>Weight</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex">
                <img src="/icons/Height.svg" alt="" />
                <span>0.7M</span>
              </div>

              <span>Height</span>
            </div>

            <div className="flex flex-col">
              <span>Chlorophyll</span>
              <span>Overgrow</span>
              <span>Moves</span>
            </div>
          </div>

          <div className="bg-white">
            <article>
              There is a plant seed on its back right from the day this Pokémon
              is born. The seed slowly grows larger.
            </article>
          </div>

          <div>
            <div className=" text-[#74CB48] text-center">
              <span>Base Stats</span>
            </div>
          </div>
        
          <div className="grid grid-cols-4 mt-28">
            <div>
              <div className="grid grid-cols-1 grid-rows-6">
                <div>
                  <p>HP</p>
                </div>
                <div>
                  <p>Atk</p>
                </div>
                <div>
                  <p>Def</p>
                </div>
                <div>
                  <p>SAtak</p>
                </div>
                <div>
                  <p>SDef</p>
                </div>
                <div>
                  <p>SPD</p>
                </div>
                <div></div>
              </div>
            </div>
            <div className="cols-start-2 col-span-3">
            <div className="grid grid-cols-1 grid-rows-6">
                <div>
                  <p>045</p>
                </div>
                <div>
                  <p>049</p>
                </div>
                <div>
                  <p>049</p>
                </div>
                <div>
                  <p>065</p>
                </div>
                <div>
                  <p>065</p>
                </div>
                <div>
                  <p>045</p>
                </div>
                <div></div>
              </div>
            </div>
            
          </div>
        </section>
      </main>
    </>
  );
};

export default PokemonDetails;
