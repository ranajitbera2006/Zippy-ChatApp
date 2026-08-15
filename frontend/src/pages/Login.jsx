import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading,logIn} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    await logIn({username,password})
    console.log(username, password);
  };
  return (
    <div className="gradient-background min-h-screen ">
      <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className=" p-5 rounded-2xl space-y-4 shadow-mauve-950 shadow-xl">
            <div className="pt-7">
              <h1 className="text-center font-bold text-2xl">Welcome back</h1>
              <h1 className="text-center font-bold text-2xl text-primary-dark">
                Log In
              </h1>
            </div>

            <div className="border w-full max-w-md flex justify-between rounded-xl">
              <button
                disabled
                className="bg-primary-dark text-white px-3 py-2 rounded-l-xl "
              >
                <FaUserCircle className="w-5 h-5" />
              </button>
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                name="username"
                id="username"
                type="text"
                placeholder="Enter username or email..."
                required
                className="w-full px-2 focus:outline-none"
              />
            </div>
            <div className="border w-full max-w-md flex justify-between rounded-xl">
              <button
                disabled
                className="bg-primary-dark text-white px-3 py-2 rounded-l-xl "
              >
                <RiLockPasswordFill className="w-5 h-5" />
              </button>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your password..."
                required
                className="w-full px-2 focus:outline-none"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary px-3 py-1 rounded-2xl text-primary-foreground cursor-pointer hover:bg-emerald-700 hover:shadow-2xl transition-shadow"
                disabled={loading}
              >
                {loading? <span className="loading loading-spinner"/> :"Login"}
              </button>
            </div>
            <div>
              <p>
                New here ?{" "}
                <Link to="/signup" className="hover:underline text-primary">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
