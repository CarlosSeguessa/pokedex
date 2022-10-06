import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const navigateTo = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const agregarUsuario = async () => {
    try {
      if (user === "" || email === "" || password === "") {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "All fields are required",
          showConfirmButton: false,
          timer: 1200,
        });
        return;
      }

      const response = await fetch("http://localhost:3000/auth/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user,
          mail: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const auth = await response.json();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario registrado con exito",
        showConfirmButton: false,
        timer: 1200,
      });

      navigateTo("/login");
    } catch (error) {
      Swal.fire({
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
    agregarUsuario();
  };

  return (
    <>
      <div className="flex justify-center items-center w-full bg-cover h-screen bg-[url(https://i.pinimg.com/originals/59/55/db/5955dbc72f5e4c1d800196d596d547aa.jpg)]">
        <form
          className=" w-[400px] h-[600px] bg-white rounded-md mx-3"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex justify-center items-center">
            <div className=" w-[180px] h-[180px] bg-black mb-5 rounded-full mt-10 ">
              <img src="/img/charizard.png" className="w-[180px] h-[180px]" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center">
            <label className="pl-8" htmlFor="">
              User:
            </label>
            <input
              id="user"
              placeholder="User"
              className="self-center w-[340px] px-3 py-1.5 bg-white border border-gray-300 focus:border-blue-600 focus:outline-none rounded mb-2"
              name="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="text"
            />
          </div>
          <div className="w-full flex flex-col justify-center">
            <label className="pl-8" htmlFor="">
              Email:
            </label>
            <input
              placeholder="example@mail.com"
              className="self-center w-[340px] px-3 py-1.5 bg-white border border-gray-300 focus:border-blue-600 focus:outline-none rounded mb-2"
              email="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="w-full flex flex-col justify-center">
            <label className="pl-8" htmlFor="">
              Password:
            </label>
            <input
              placeholder="Password"
              className="self-center w-[340px] px-3 py-1.5 bg-white border border-gray-300 focus:border-blue-600 focus:outline-none rounded mb-2"
              password="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className=" w-full flex justify-center">
            <button
              type="submit"
              className="w-[340px] rounded bg-blue-500 px-3 py-1.5 text-white text-center"
            >
              Sign Up
            </button>
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

export default Register;
