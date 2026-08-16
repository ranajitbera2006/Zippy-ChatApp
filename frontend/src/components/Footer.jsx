import React from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import LogoutBtn from "./parts/LogoutBtn";
import ChatBtn from "./parts/ChatBtn";
const Footer = () => {

  return (
    <div className="px-3 my-2.5 shrink-0   z-40">
      <div className="flex justify-around   text-xl ">
        <ChatBtn />
        <LogoutBtn />
      </div>
    </div>
  );
};

export default Footer;
