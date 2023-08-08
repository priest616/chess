import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="h-screen w-screen bg-[#666666] flex items-center mb-6 ">
      <div className="container flex items-center mx-auto justify-evenly" >
        <div className="hidden md:block">
          <img
            src="https://cdn3.iconfinder.com/data/icons/hobbies-and-free-time-17/512/Chess_Chess_game_Game_Marketing_Pawn_Pawns_Strategy.png"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center px-2 space-y-5">
          <h1 className="text-3xl text-white font-[800] leading-7">Welcome!</h1>
          <h2 className="text-md text-white font-[400]">
            Log-in to your Game-Place
          </h2>
          <form
            onSubmit={handleSubmit}
            className="px-8 pt-6 pb-8 mb-4 bg-white shadow-md rounded-xl w-96"
          >
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="example@mail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative border">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 leading-tight text-gray-700 rounded appearance-none focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-0 right-0 w-8 h-full px-2 py-2 text-gray-600 focus:outline-none"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-500 form-checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <span className="ml-2 mt-1 text-gray-700 text-[14px]">
                    Remember me
                  </span>
                </label>
                <p className="text-[10px] italic text-[grey] flex justify-end">
                  Forgot Password ?
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
            <p className="flex justify-center mt-4">or</p>
            <button className="flex items-center justify-center w-full p-3 mt-4 border rounded gap-x-3">
              <FcGoogle className="text-2xl" /> Continue with Google
            </button>
            <p className="flex justify-center mt-6">
              Don't have an account?
              <span className="font-[500] ml-1"><Link to={"/signup"}>Create Now</Link></span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
