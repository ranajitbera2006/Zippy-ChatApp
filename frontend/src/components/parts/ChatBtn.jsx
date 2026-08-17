import React from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import useConversation from "../../zustand/useConversation";
const ChatBtn = () => {
  const { selectedConversation } = useConversation();
  return (
    <button
      title="Contact list"
      className={` w-16 h-8 rounded items-center  flex justify-center hover:bg-background ${!selectedConversation && "bg-background"} cursor-pointer`}
    >
      <BsChatLeftDotsFill />
    </button>
  );
};

export default ChatBtn;
