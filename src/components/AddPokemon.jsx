import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const AddPokemon = () => {
  const MySwal = withReactContent(Swal);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [move, setMove] = useState("");
  const [description, setDescription] = useState("");
  const [cardColor, setCardColor] = useState("#ffffff");
  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [specialAttack, setSpecialAttack] = useState("");
  const [specialDefense, setSpecialDefense] = useState("");
  const [speed, setSpeed] = useState("");

  const navigateTo = useNavigate();
  const agregarPokemon = async () => {
    try {
      // validar que todos los campos esten completos
      if (
        name === "" ||
        image === "" ||
        type1 === "" ||
        type2 === "" ||
        height === "" ||
        weight === "" ||
        move === "" ||
        description === "" ||
        cardColor === "" ||
        hp === "" ||
        attack === "" ||
        defense === "" ||
        specialAttack === "" ||
        specialDefense === "" ||
        speed === ""
      ) {
        MySwal.fire({
          position: "top-end",
          icon: "error",
          title: "All fields are required",
          showConfirmButton: false,
          timer: 1200,
        });
        return;
      }

      const response = await fetch("http://localhost:3000/api/pokemones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          name: name,
          img: image,
          type1: type1,
          type2: type2,
          height: height,
          weight: weight,
          moves: [move],
          description: description,
          cardcolor: cardColor,
          hp: hp,
          atk: attack,
          def: defense,
          satk: specialAttack,
          sdef: specialDefense,
          spd: speed,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      MySwal.fire({
        position: "top-end",
        icon: "success",
        title: "Pokemon agregado con éxito!",
        showConfirmButton: false,
        timer: 1200,
      });

      // redireccionar a la home
      navigateTo("/");
    } catch (error) {
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: error.message,
        showConfirmButton: false,
        timer: 1200,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarPokemon();
  };

  return (
    <>
      <div className="form-container w-full h-full flex flex-col justify-center">
        <div className="w-full h-[10vh] flex justify-center items-center">
          <img className="w-10 mr-4" src="/img/Pokeball.png" alt="Pokeball" />
          <h1 className="text-2xl font-bold">Add Pokémon</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full h-screen"
          encType="multipart/form-data"
        >
          <div className="w-full flex justify-center items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pokemonName"
              >
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pokemonName"
                type="text"
                value={name}
                placeholder="Pokemon Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="img"
              >
                image (only png):
              </label>
              <input
                className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="img"
                type="text"
                value={image}
                placeholder="Image Url"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full flex justify-center items-center ">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="type1"
              >
                Choose a type:
              </label>
              <select
                className="w-[250px] py-2 px-3"
                size="8"
                name="type1"
                id="type1"
                value={type1}
                onChange={(e) => setType1(e.target.value)}
              >
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="psychic">Psychic</option>
                <option value="ice">Ice</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="flying">Flying</option>
                <option value="bug">Bug</option>
                <option value="rock">Rock</option>
                <option value="ghost">Ghost</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Dark</option>
                <option value="steel">Steel</option>
                <option value="fairy">Fairy</option>
              </select>
            </div>
          </div>
          <div className="w-full flex justify-center items-center ">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="type2"
              >
                Choose a second type:
              </label>
              <select
                className="w-[250px] py-2 px-3 "
                size="8"
                name="type2"
                id="type2"
                value={type2}
                onChange={(e) => setType2(e.target.value)}
              >
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="psychic">Psychic</option>
                <option value="ice">Ice</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="flying">Flying</option>
                <option value="bug">Bug</option>
                <option value="rock">Rock</option>
                <option value="ghost">Ghost</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Dark</option>
                <option value="steel">Steel</option>
                <option value="fairy">Fairy</option>
                <option value="null">None</option>
              </select>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pokemonName"
              >
                Height (in meters):
              </label>
              <input
                className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pokemonName"
                type="number"
                placeholder="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pokemonName"
              >
                Weight (in kilograms):
              </label>
              <input
                className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pokemonName"
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center ">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="move1"
              >
                Choose a move:
              </label>
              <select
                className="w-[250px] py-2 px-3"
                size="8"
                name="move1"
                id="move1"
                value={move}
                onChange={(e) => setMove(e.target.value)}
              >
                <option value="chlorophyll">Chlorophyll</option>
                <option value="overgrow">Overgrow</option>
                <option value="blaze">Blaze</option>
                <option value="torrent">Torrent</option>
                <option value="rain-dish">Rain Dish</option>
                <option value="flash-fire">Flash Fire</option>
                <option value="thick-fat">Thick Fat</option>
                <option value="solar-power">Solar Power</option>
                <option value="swift-swim">Swift Swim</option>
                <option value="sand-stream">Sand Stream</option>
                <option value="drought">Drought</option>
                <option value="snow-cloak">Snow Cloak</option>
                <option value="snow-warning">Snow Warning</option>
                <option value="drizzle">Drizzle</option>
                <option value="synchronize">Synchronize</option>
              </select>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description (max 200 characters):
              </label>
              <textarea
                className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="color"
              >
                Select a color:
              </label>
              <input
                className="shadow appearance-none border rounded w-[250px] h-[40px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="color"
                type="color"
                value={cardColor}
                onChange={(e) => setCardColor(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pokemonName"
              >
                Hp:
              </label>
              <input
                className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pokemonName"
                type="number"
                placeholder="045"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pokemonName"
              >
                Atk:
              </label>
              <input
                className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pokemonName"
                type="number"
                placeholder="045"
                value={attack}
                onChange={(e) => setAttack(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pokemonName"
              >
                Def:
              </label>
              <input
                className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pokemonName"
                type="number"
                placeholder="045"
                value={defense}
                onChange={(e) => setDefense(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pokemonName"
              >
                Satk:
              </label>
              <input
                className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pokemonName"
                type="number"
                placeholder="045"
                value={specialAttack}
                onChange={(e) => setSpecialAttack(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pokemonName"
              >
                Sdef:
              </label>
              <input
                className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pokemonName"
                type="number"
                placeholder="045"
                value={specialDefense}
                onChange={(e) => setSpecialDefense(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pokemonName"
              >
                Spd:
              </label>
              <input
                className="shadow appearance-none border rounded w-[250px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pokemonName"
                type="number"
                placeholder="045"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
              />
            </div>
          </div>
          <div className=" w-full flex justify-center pb-4">
            <button
              type="submit"
              className="w-[340px] rounded bg-blue-500 px-3 py-1.5 text-white text-center"
            >
              Add Pokemon
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPokemon;
