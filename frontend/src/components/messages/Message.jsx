import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { CgProfile } from "react-icons/cg";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId.toString() === authUser._id.toString();

  const chatClass = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const fullname = fromMe ? authUser.fullname : selectedConversation?.fullname;

  const bubbleBgColor = fromMe ? "bg-blue-700" : "bg-pink-700";

  let time = new Date(message.updatedAt).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12:true,
  });

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt={<CgProfile/>} />
        </div>
      </div>

      <div className={`chat-bubble ${bubbleBgColor}`}>{message.message}</div>

      <div className="chat-footer opacity-50">{time}</div>
    </div>
  );
};

export default Message;
