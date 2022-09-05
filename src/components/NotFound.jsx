import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex items-center flex-col">
        <img className="w-[300px] ml-3 " src="/img/fondo.png" alt="" />
        <h1 className="  text-center ..."> 404. That’s an error. </h1>
        <div className="flex w-full justify-center my-32">
          <Link to="/">
            <button className=" py-3 px-5 font-bold text-1xl  center rounded-md text-white transition ease-in-out delay-150 bg-blue-800 hover:-translate-y-1 hover:scale-120 hover:bg-indigo-500 duration-300 marker:  ...">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
