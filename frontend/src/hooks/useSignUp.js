import React, { useState } from "react";
import toast from "react-hot-toast";
const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const signUp = async ({
    fullname,
    username,
    gender,
    password,
    confirmPassword,
  }) => {
    const success = handleSignUpError({
      fullname,
      username,
      gender,
      password,
      confirmPassword,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          gender,
          password,
          confirmPassword,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Signup failed");
      }
      localStorage.setItem("chat-user",JSON.stringify(data));
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { loading, signUp };
};

export default useSignUp;

const handleSignUpError = ({
  fullname,
  username,
  gender,
  password,
  confirmPassword,
}) => {
  if (!fullname || !username || !gender || !password || !confirmPassword) {
    toast.error("Please fill out all the fields to continue.");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not matched!");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long.");
    return false;
  }
  return true;
};
