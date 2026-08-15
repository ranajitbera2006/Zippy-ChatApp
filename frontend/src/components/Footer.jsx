import React from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="px-3 my-2.5 shrink-0  z-40">
      <div className="flex justify-around   text-xl ">
        <Link to="/conversations" aria-label="Chats">
          <BsChatLeftDotsFill />
        </Link>
        <Link to="/logout" aria-label="Logout">
          <AiOutlineLogout />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
