import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUsuario = async () => {
    try {

      if (email === "" || password === "") {
        alert("Todos los campos son obligatorios");
        return;
      }

      const respuesta = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: email,
          password: password,
        }),
      });

      if (!respuesta.ok) {
        const error = await respuesta.json();
        throw new Error(error.message);
      }

      const auth = await respuesta.json();

      alert("Aguante team pastaflora!!");

      localStorage.setItem("token", auth.token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUsuario();
  };

  return (
    <>
      <div className="flex justify-center items-center w-full bg-cover h-screen bg-[url(https://i.pinimg.com/originals/59/55/db/5955dbc72f5e4c1d800196d596d547aa.jpg)]">
        <form
          className=" w-[400px] h-[560px] bg-white rounded-md "
          onSubmit={handleSubmit}
        >
          <div className="w-full flex justify-center items-center">
            <div className=" w-[180px] h-[180px] bg-black mb-5 rounded-full mt-10 "></div>
          </div>
          <div className="text-xl font-semibold flex justify-center mb-5">
            Bienvenido a la pokedex
          </div>
          <div className="flex justify-center">
            <input
              placeholder="Email"
              className="w-[340px] px-3 py-1.5 bg-white border border-gray-300 focus:border-blue-600 focus:outline-none rounded mb-2"
              email="user"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="flex justify-center">
            <input
              placeholder="Contraseña"
              className="w-[340px] px-3 py-1.5 bg-white border border-gray-300 focus:border-blue-600 focus:outline-none rounded mb-2"
              email="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className=" w-full flex justify-center">
            <button className="w-[340px] rounded bg-[#cb99c9] px-3 py-1.5 text-white text-center">
              Log In
            </button>
          </div>
          <div className=" w-full flex justify-center mt-3">
            <Link to="/register" className="w-[340px] rounded bg-blue-500 px-3 py-1.5 text-white text-center">Sign Up</Link>
          </div>
          <div className="flex justify-center mt-2">
            <div className="w-[340px] h-[1px] bg-[#808080]"></div>
          </div>
          <div className="flex justify-center">
            <div className="mt-2 text-slate-600 text-sm w-full text-center ">
              Todos los derechos reservados al equipo ©️Pastafrola
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
