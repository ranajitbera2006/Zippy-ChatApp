import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import useLogout from "../../hooks/useLogout";
const LogoutBtn = () => {
  const { loading, logout } = useLogout();
  return (
    <button className=" w-12 h-8 rounded items-center  flex justify-center hover:bg-background cursor-pointer" onClick={logout}>
      {!loading ? (
        <AiOutlineLogout />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </button>
  );
};

export default LogoutBtn;
