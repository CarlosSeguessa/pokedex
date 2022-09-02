import React from 'react'
import { useParams, Link } from "react-router-dom";
const PokemonDetails = () => {
let params = useParams();
  return (
    <>
      <main className="bg-[#74CB48] w-full h-screen">
        <div className="flex justify-between px-4">
          <div className="flex items-center text-white mx-4 pt-7 z-10">
            <i className="fa-solid fa-arrow-left-long text-white mr-4"></i>
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
        <img
          src="/img/bulbasaur.png "
          className="absolute z-0 left-12 right-5 bottom-51 mt-16 ml-16"
          alt=""
        />

        <section className="card-container w-[97%] ml-[5px] mt-52   bg-white rounded-lg    ">
          <div className="text-white flex justify-center pt-16 pb-8 w-full">
            <span className="bg-[#74CB48] rounded-lg w-16 text-center">
              Grass
            </span>
            <span className="bg-[#A43E9E] rounded-lg w-16 text-center ml-5">
              Poison
            </span>
          </div>
          <div className=" text-[#74CB48] flex justify-center font-bold">
            <span>About</span>
          </div>

          <div className="grid grid-cols-3 w-full mt-6 ml-5 ">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex">
                  <img src="/icons/weight.svg" alt="" />
                  <span className="ml-3">6.9kg</span>
                </div>
                <span className="mt-3 text-[#b5b3b3]">Weight</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex">
                <img src="/icons/Height.svg" alt="" />
                <span className="ml-3">0.7M</span>
              </div>

              <span className="mt-3 text-[#b5b3b3]">Height</span>
            </div>

            <div className="flex flex-col mb-3">
              <span>Chlorophyll</span>
              <span>Overgrow</span>
              <span className="text-[#b5b3b3]">Moves</span>
            </div>
          </div>

          <div className="bg-white mt-4 ml-3 mr-3">
            <article>
              There is a plant seed on its back right from the day this Pokémon
              is born. The seed slowly grows larger.
            </article>
          </div>

          <div>
            <div className=" text-[#74CB48] text-center mt-10">
              <span>Base Stats</span>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-4 w-40 grid-rows-6 text-xs h-40 text-[#74CB48] items-center ml-2  mt-5">
              <div className="mt-3 font-bold">
                <p>HP</p>
              </div>
              <div className="row-start-2 mt-3 font-bold">
                <p>Atk</p>
              </div>
              <div className="row-start-3 mt-3 font-bold">
                <p>Def</p>
              </div>
              <div className="row-start-4 mt-3 font-bold">
                <p>SAtak</p>
              </div>
              <div className="row-start-5 mt-3 font-bold">
                <p>SDef</p>
              </div>
              <div className="row-start-6 mt-3 font-bold">
                <p>SPD</p>
              </div>
              <div className="col-start-2 row-start-1 text-black mt-3 ml-3">
                <p>045</p>
              </div>
              <div className="col-start-2 row-start-2 text-black mt-3 ml-3">
                <p>049</p>
              </div>
              <div className="col-start-2 row-start-3 text-black mt-3 ml-3">
                <p>049</p>
              </div>
              <div className="col-start-2 row-start-4 text-black mt-3 ml-3">
                <p>065</p>
              </div>
              <div className="col-start-2 row-start-5 text-black mt-3 ml-3">
                <p>065</p>
              </div>
              <div className="col-start-2 row-start-6 text-black mt-3 ml-3">
                <p>045</p>
              </div>
              <div className="row-start-1 col-start-3 col-span-4 ml-3 mt-7">
                <div className="w-56 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 "
                    style={{ width: 45 }}
                  ></div>
                </div>
              </div>
              <div className=" row-start-2 col-start-3 col-span-4 ml-3 mt-7">
                <div className="w-56 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 "
                    style={{ width: 49 }}
                  ></div>
                </div>
              </div>
              <div className=" row-start-3 col-start-3 col-span-4 ml-3 mt-7">
                <div className="w-56 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 "
                    style={{ width: 49 }}
                  ></div>
                </div>
              </div>
              <div className=" row-start-4 col-start-3 col-span-4 ml-3 mt-7">
                <div className="w-56 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 "
                    style={{ width: 65 }}
                  ></div>
                </div>
              </div>
              <div className=" row-start-5 col-start-3 col-span-4 ml-3 mt-7">
                <div className="w-56 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 "
                    style={{ width: 65 }}
                  ></div>
                </div>
              </div>
              <div className=" row-start-6 col-start-3 col-span-4 ml-3 mt-7">
                <div className="w-56 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-[#74CB48] "
                    style={{ width: 45 }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="cols-start-2">
              <div></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PokemonDetails;