import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Login = () => {
  const MySwal = withReactContent(Swal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const loginUsuario = async () => {
    try {
      if (email === "" || password === "") {
        MySwal.fire({
          position: "top-end",
          icon: "error",
          title: "All fields are required",
          showConfirmButton: false,
          timer: 1200,
        });
        return;
      }

      // si el usuario existe, pero la contraseña no coincide, no se puede loguear

      const respuesta = await fetch(
        "pokedex-back-production-18ab.up.railway.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mail: email,
            password: password,
          }),
        }
      );

      if (!respuesta.ok) {
        const error = await respuesta.json();
        throw new Error(error.message);
      }
      const auth = await respuesta.json();

      MySwal.fire({
        title: "you are logged in",
        imageUrl:
          "https://i0.wp.com/applauss.com/wp-content/uploads/2016/02/happy-pokemon.gif?fit=400%2C282&ssl=1",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });

      localStorage.setItem("token", auth.token);
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
    loginUsuario();
  };

  return (
    <>
      <div className="flex justify-center items-center w-full bg-contain bg-no-repeat h-screen bg-[url(/img/WALLPAPAER.png)]">
        <form
          className=" w-[400px] h-[560px] bg-white rounded-md mx-3"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex justify-center items-center">
            <div className=" w-[180px] h-[180px] bg-black mb-5 rounded-full mt-10 flex justify-center items-center ">
              <img src="/img/charizard.png" className="w-[180px] h-[180px]" />
            </div>
          </div>
          <div className="text-xl font-semibold flex justify-center mb-5">
            Welcome to the pokedex
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
              placeholder="Password"
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
            <Link
              to="/register"
              className="w-[340px] rounded bg-blue-500 px-3 py-1.5 text-white text-center"
            >
              Sign Up
            </Link>
          </div>
          <div className="flex justify-center mt-2">
            <div className="w-[340px] h-[1px] bg-[#808080]"></div>
          </div>
          <div className="flex justify-center">
            <div className="mt-2 text-slate-600 text-sm w-full text-center ">
              All rights reserved to the team ©️Pastafrola
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
