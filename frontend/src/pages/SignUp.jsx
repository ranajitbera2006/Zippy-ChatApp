import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import GenderCheckBox from "../components/GenderCheckBox";

const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: "",
    username: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (e) => {
    setInput((prev) => ({ ...prev, gender: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.gender) {
      alert("Please select your gender!");
      return;
    }
    if (input.password !== input.confirmPassword) {
      alert("Password and confirm password should match!");
      return;
    }
    console.log(input);
    setInput({
      fullname: "",
      username: "",
      gender: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/login");
  };
  return (
    <div className="gradient-background min-h-screen ">
      <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className=" p-5 rounded-2xl space-y-4 shadow-mauve-950 shadow-xl">
            <div className="pt-7">
              <h1 className="text-center font-bold text-2xl">
                Welcome to myChat
              </h1>
              <h1 className="text-center font-bold text-2xl text-primary-dark">
                Sign Up
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
                onChange={handleChange}
                value={input.fullname}
                name="fullname"
                id="fullname"
                type="text"
                placeholder="Enter name..."
                required
                className="w-full px-2 focus:outline-none"
              />
            </div>
            <div className="border w-full max-w-md flex justify-between rounded-xl">
              <button
                disabled
                className="bg-primary-dark text-white px-3 py-2 rounded-l-xl "
              >
                <MdEmail className="w-5 h-5" />
              </button>
              <input
                onChange={handleChange}
                value={input.username}
                name="username"
                id="username"
                type="email"
                placeholder="Enter username or email..."
                required
                className="w-full px-2 focus:outline-none"
              />
            </div>
            <GenderCheckBox
              selectGender={input.gender}
              onGenderChange={handleGenderChange}
            />
            <div className="border w-full max-w-md flex justify-between rounded-xl">
              <button
                disabled
                className="bg-primary-dark text-white px-3 py-2 rounded-l-xl "
              >
                <RiLockPasswordFill className="w-5 h-5" />
              </button>
              <input
                onChange={handleChange}
                value={input.password}
                type="password"
                name="password"
                id="password"
                placeholder="Create a new password..."
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
                onChange={handleChange}
                value={input.confirmPassword}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Your password..."
                required
                className="w-full px-2 focus:outline-none"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary px-3 py-1 rounded-2xl text-primary-foreground cursor-pointer hover:bg-emerald-700 hover:shadow-2xl transition-shadow"
              >
                Signup
              </button>
            </div>
            <div>
              <p>
                Already have an account ?{" "}
                <Link to="/login" className="hover:underline text-primary">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
