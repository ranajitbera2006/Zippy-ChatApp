import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import useLogout from "../../hooks/useLogout";
import useConversation from "../../zustand/useConversation";

const LogoutBtn = () => {
  const { loading, logout } = useLogout();
  const { setSelectedConversation } = useConversation();
  const handleOnClick = () => {
    logout();
    setSelectedConversation(null);
  };
  return (
    <button
      title="Logout"
      className=" w-12 h-8 rounded items-center  flex justify-center hover:bg-background cursor-pointer"
      onClick={handleOnClick}
    >
      {!loading ? (
        <AiOutlineLogout />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </button>
  );
};

export default LogoutBtn;
