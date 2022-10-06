import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemones } from "../data/api";

const PokemonDetails = () => {
  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(true);
  const obtenerPokemones = async () => {
    try {
      const response = await getPokemones();
      setPokemones(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    obtenerPokemones();
  }, []);

  let params = useParams();
  let nextPokemon = parseInt(params.pokemonId) + 1;
  let prevPokemon = parseInt(params.pokemonId) - 1;
  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        pokemones.map((pokemon, i) => {
          if (pokemon.id === params.pokemonId) {
            return (
              <React.Fragment key={i}>
                <main
                  className="w-full h-full"
                  style={{ backgroundColor: pokemon.cardcolor }}
                >
                  <section className="w-full h-screen">
                    <div className="absolute z-20 flex w-full justify-between px-6 pt-6 xl:px-32">
                      <Link to="/">
                        <div className="cursor-pointer text-white flex items-center ">
                          <i className="fa-solid fa-arrow-left mr-4 text-2xl"></i>
                          <h1 className="text-2xl font-bold">{pokemon.name}</h1>
                        </div>
                      </Link>
                      <div className="flex items-center">
                        <p className="text-white font-bold">#00{pokemon.id}</p>
                      </div>
                    </div>
                    <div className="absolute flex w-full justify-center pl-24 top-[8px] z-0">
                      <img
                        className="opacity-20 w-[228px] h-[228px] "
                        src="/img/pokeballwhite.png"
                        alt="Pokeball"
                      />
                    </div>

                    <div
                      className={`${
                        params.pokemonId === pokemones[0].id ? "hidden" : ""
                      } absolute flex items-center left-[24px] top-[228px] xl:left-[350px] xl:top-[212px] z-30`}
                    >
                      <Link to={`/pokemondetails/${prevPokemon}`}>
                        <i className="text-white fa-solid fa-angle-left text-sm sm:text-xl"></i>
                      </Link>
                    </div>

                    <div
                      className={`${
                        params.pokemonId >= pokemones.length ? "hidden" : ""
                      } absolute flex items-center right-[24px] top-[228px] xl:right-[350px] xl:top-[212px] z-30`}
                    >
                      <Link to={`/pokemondetails/${nextPokemon}`}>
                        <i className="text-white fa-solid fa-angle-right text-sm sm:text-xl"></i>
                      </Link>
                    </div>
                    <div className="absolute w-full flex justify-center top-[110px] z-20">
                      <img
                        className="w-[200px] h-[200px]"
                        src={pokemon.img}
                        alt={pokemon.name}
                      />
                    </div>
                    <div className="absolute w-full top-[259px] p-1 sm:px-3 lg:px-28 xl:px-[300px]  z-10">
                      <div className="bg-white w-full h-2/4 rounded-lg lg:h-[300px] xl:h-[650px] xl:drop-shadow-2xl">
                        <div className="pt-14 pb-5 px-5">
                          <div className="w-full flex justify-center">
                            <span className="min-w-[55px] min-h-[20px] text-center rounded-xl text-black font-bold flex items-center justify-center px-3">
                              {pokemon.type1}
                            </span>
                            {pokemon.type2 === null ? (
                              ""
                            ) : (
                              <span className="min-w-[55px] min-h-[20px] text-center rounded-xl text-black font-bold flex items-center justify-center px-3 ml-4">
                                {pokemon.type2}
                              </span>
                            )}
                          </div>
                          <div className="w-full flex justify-center items-center mt-7">
                            <p
                              className="font-bold text-lg"
                              style={{ color: pokemon.cardcolor }}
                            >
                              About
                            </p>
                          </div>
                          <div className="grid grid-cols-3 mt-6">
                            <div className="w-full flex flex-col items-center justify-center border-r-2 border-[#E0E0E0]">
                              <div className="flex items-center justify-center mb-3">
                                <img
                                  className="mr-2"
                                  src="/icons/Weight.svg"
                                  alt="Weight"
                                />
                                <p>{pokemon.weight} kg</p>
                              </div>
                              <p className="text-[13px] text-[#666666]">
                                Weight
                              </p>
                            </div>
                            <div className="w-full flex flex-col items-center justify-center border-r-2 border-[#E0E0E0]">
                              <div className="flex items-center justify-center mb-3">
                                <img
                                  className="mr-2"
                                  src="/icons/Height.svg"
                                  alt="Weight"
                                />
                                <p>{pokemon.height} m</p>
                              </div>
                              <p className="text-[13px] text-[#666666]">
                                Height
                              </p>
                            </div>
                            <div className="w-full flex flex-col items-center justify-center ">
                              <div className="flex flex-col items-center justify-center mb-3">
                                <p className="text-center ">
                                  {pokemon.moves[0]}
                                </p>
                                {pokemon.moves[1] === null ? (
                                  ""
                                ) : (
                                  <p className="text-center ml-2">
                                    {pokemon.moves[1]}
                                  </p>
                                )}
                              </div>
                              <p className="text-[13px] text-[#666666]">
                                Moves
                              </p>
                            </div>
                          </div>
                          <div className="w-full flex mt-6 md:text-center lg:justify-center xl:mt-10">
                            <p>{pokemon.description}</p>
                          </div>

                          <div className="w-full flex justify-center items-center mt-6 xl:mt-10">
                            <p
                              className="font-bold text-lg"
                              style={{ color: pokemon.cardcolor }}
                            >
                              Base Stats
                            </p>
                          </div>
                          <div className="mt-6 xl:mt-12 grid auto-cols-max auto-rows-max sm:justify-center ">
                            <div
                              key={i}
                              className="flex flex-col col-start-1 border-r-2 pr-3 text-right"
                              style={{ color: pokemon.cardcolor }}
                            >
                              <div>HP</div>
                              <div>ATK</div>
                              <div>DEF</div>
                              <div>SATK</div>
                              <div>SDEF</div>
                              <div>SPD</div>
                            </div>
                            <div className="flex flex-row col-start-2 ml-2 text-right">
                              <div className="flex flex-col">
                                <div>{pokemon.hp}</div>
                                <div>{pokemon.atk}</div>
                                <div>{pokemon.def}</div>
                                <div>{pokemon.satk}</div>
                                <div>{pokemon.sdef}</div>
                                <div>{pokemon.spd}</div>
                              </div>
                            </div>
                            <div className="flex flex-col col-start-3 justify-around items-center">
                              <div className="w-60 sm:w-96 bg-gray-200 rounded-full h-2.5 ml-1">
                                <div
                                  className=" h-2.5 rounded-full"
                                  style={{
                                    width: `${pokemon.hp / 2}%`,
                                    backgroundColor: pokemon.cardcolor,
                                  }}
                                ></div>
                              </div>
                              <div className="w-60 sm:w-96 bg-gray-200 rounded-full h-2.5 ml-1 ">
                                <div
                                  className=" h-2.5 rounded-full"
                                  style={{
                                    width: `${pokemon.atk / 2}%`,
                                    backgroundColor: pokemon.cardcolor,
                                  }}
                                ></div>
                              </div>
                              <div className="w-60 sm:w-96 bg-gray-200 rounded-full h-2.5 ml-1 ">
                                <div
                                  className=" h-2.5 rounded-full"
                                  style={{
                                    width: `${pokemon.def / 2}%`,
                                    backgroundColor: pokemon.cardcolor,
                                  }}
                                ></div>
                              </div>
                              <div className="w-60 sm:w-96 bg-gray-200   rounded-full h-2.5 ml-1 ">
                                <div
                                  className=" h-2.5 rounded-full"
                                  style={{
                                    width: `${pokemon.satk / 2}%`,
                                    backgroundColor: pokemon.cardcolor,
                                  }}
                                ></div>
                              </div>
                              <div className="w-60 sm:w-96 bg-gray-200  rounded-full h-2.5 ml-1 ">
                                <div
                                  className=" h-2.5 rounded-full"
                                  style={{
                                    width: `${pokemon.sdef / 2}%`,
                                    backgroundColor: pokemon.cardcolor,
                                  }}
                                ></div>
                              </div>
                              <div className="w-60 sm:w-96 bg-gray-200 rounded-full h-2.5 ml-1 ">
                                <div
                                  className=" h-2.5 rounded-full"
                                  style={{
                                    width: `${pokemon.spd / 2}%`,
                                    backgroundColor: pokemon.cardcolor,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </main>
              </React.Fragment>
            );
          } else {
            <p>No se encontro pokemon</p>;
          }
        })
      )}
    </>
  );
};

export default PokemonDetails;
