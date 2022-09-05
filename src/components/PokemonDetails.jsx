import React from "react";
import { useParams, Link } from "react-router-dom";

const PokemonDetails = (props) => {
  let params = useParams();
  let nextPokemon = parseInt(params.pokemonId) + 1;
  let prevPokemon = parseInt(params.pokemonId) - 1;
  return (
    <React.Fragment>
      {props.pokemones.map((pokemon, i) => {
        if (pokemon.id === params.pokemonId) {
          return (
            <React.Fragment key={i}>
              <main
                className="w-full h-screen"
                style={{ backgroundColor: pokemon.cardColor }}
              >
                <section className="w-full h-screen">
                  <div className="absolute z-0 flex w-full justify-between px-6 pt-6">
                    <Link to="/">
                      <div className="cursor-pointer text-white flex items-center">
                        <i className="fa-solid fa-arrow-left mr-4 text-2xl"></i>
                        <h1 className="text-2xl font-bold">{pokemon.name}</h1>
                      </div>
                    </Link>
                    <div className="flex items-center">
                      <p className="text-white font-bold">#00{pokemon.id}</p>
                    </div>
                  </div>
                  <div className="absolute left-[144px] top-[8px] z-0">
                    <img
                      className="opacity-10 w-[228px] h-[228px]"
                      src="/img/pokeball.png"
                      alt="Pokeball"
                    />
                  </div>

                  <div
                    className={`${
                      params.pokemonId === "1" ? "hidden" : ""
                    } absolute flex items-center left-[24px] top-[228px] z-30`}
                  >
                    <Link to={`/pokemondetails/${prevPokemon}`}>
                      <i className="text-white fa-solid fa-angle-left text-sm"></i>
                    </Link>
                  </div>

                  <div
                    className={`${
                      params.pokemonId >= props.pokemones.length ? "hidden" : ""
                    } absolute flex items-center right-[24px] top-[228px] z-30`}
                  >
                    <Link to={`/pokemondetails/${nextPokemon}`}>
                      <i className="text-white fa-solid fa-angle-right text-sm "></i>
                    </Link>
                  </div>
                  <div className="absolute w-full flex justify-center top-[110px] z-20">
                    <img
                      className="w-[200px] h-[200px]"
                      src={pokemon.img}
                      alt={pokemon.name}
                    />
                  </div>
                  <div className="absolute w-full top-[259px] p-1 z-10">
                    <div className="bg-white w-full h-2/4 rounded-lg">
                      <div className="pt-14 pb-5 px-5">
                        <div className="w-full flex justify-center">
                          <span
                            className="min-w-[55px] min-h-[20px] text-center rounded-xl text-white font-bold flex items-center justify-center px-3"
                            style={{ backgroundColor: pokemon.type1[1] }}
                          >
                            {pokemon.type1[0]}
                          </span>
                          {pokemon.type2[0] === null ? (
                            ""
                          ) : (
                            <span
                              className="min-w-[55px] min-h-[20px] text-center rounded-xl text-white font-bold flex items-center justify-center px-3 ml-4"
                              style={{ backgroundColor: pokemon.type2[1] }}
                            >
                              {pokemon.type2[0]}
                            </span>
                          )}
                        </div>
                        <div className="w-full flex justify-center items-center mt-7">
                          <p
                            className="font-bold text-lg"
                            style={{ color: pokemon.cardColor }}
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
                            <p className="text-[13px] text-[#666666]">Weight</p>
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
                            <p className="text-[13px] text-[#666666]">Height</p>
                          </div>
                          <div className="w-full flex flex-col items-center justify-center ">
                            <div className="flex flex-col items-center justify-center mb-3">
                              <p className="text-center ">{pokemon.moves[0]}</p>
                              {pokemon.moves[1] === null ? (
                                ""
                              ) : (
                                <p className="text-center ml-2">
                                  {pokemon.moves[1]}
                                </p>
                              )}
                            </div>
                            <p className="text-[13px] text-[#666666]">Moves</p>
                          </div>
                        </div>
                        <div className="w-full flex mt-6">
                          <p>{pokemon.description}</p>
                        </div>

                        <div className="w-full flex justify-center items-center mt-6">
                          <p
                            className="font-bold text-lg"
                            style={{ color: pokemon.cardColor }}
                          >
                            Base Stats
                          </p>
                        </div>
                        <div className="mt-6 grid auto-cols-max auto-rows-max ">
                          <div
                            className="flex flex-col col-start-1 border-r-2 pr-3 text-right"
                            style={{ color: pokemon.cardColor }}
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
                            <div className="flex flex-col items-center justify-around ml-2 w-full">
                              <div className="w-60 bg-gray-200 rounded-full h-2.5   row-start-1">
                                <div
                                  className=" h-2.5 rounded-full"
                                  style={{
                                    width: `${pokemon.hp / 2}%`,
                                    backgroundColor: pokemon.cardColor,
                                  }}
                                ></div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5   row-start-2">
                                <div
                                  className=" h-2.5 rounded-full"
                                  style={{
                                    width: `${pokemon.atk / 2}%`,
                                    backgroundColor: pokemon.cardColor,
                                  }}
                                ></div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5   row-start-3">
                                <div
                                  className=" h-2.5 rounded-full"
                                  style={{
                                    width: `${pokemon.def / 2}%`,
                                    backgroundColor: pokemon.cardColor,
                                  }}
                                ></div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5  row-start-4">
                                <div
                                  className=" h-2.5 rounded-full"
                                  style={{
                                    width: `${pokemon.satk / 2}%`,
                                    backgroundColor: pokemon.cardColor,
                                  }}
                                ></div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5  row-start-5">
                                <div
                                  className=" h-2.5 rounded-full"
                                  style={{
                                    width: `${pokemon.sdef / 2}%`,
                                    backgroundColor: pokemon.cardColor,
                                  }}
                                ></div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5  row-start-6">
                                <div
                                  className=" h-2.5 rounded-full"
                                  style={{
                                    width: `${pokemon.spd / 2}%`,
                                    backgroundColor: pokemon.cardColor,
                                  }}
                                ></div>
                              </div>
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
        }
      })}
    </React.Fragment>
  );
};

export default PokemonDetails;
