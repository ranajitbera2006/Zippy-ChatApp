import React from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
const ChatBtn = () => {
  return (
    <button className=" w-16 h-8 rounded items-center  flex justify-center hover:bg-background cursor-pointer">
      <BsChatLeftDotsFill />
    </button>
  );
};

export default ChatBtn;
