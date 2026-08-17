import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
// import { CgProfile } from "react-icons/cg";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import useDeleteMessage from "../../hooks/useDeleteMessage";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const { loading, deleteMessage } = useDeleteMessage();
  const fromMe = message.senderId.toString() === authUser._id.toString();
  const messageId = message._id;
  const chatClass = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const gender = fromMe ? authUser.gender : selectedConversation?.gender;
  const fallbackProfile =
    gender === "male"
      ? "/maleProfile.png"
      : gender === "female"
        ? "/femaleProfile.png"
        : "/profile.png";

  const fullname = fromMe ? authUser.fullname : selectedConversation?.fullname;

  const bubbleBgColor = fromMe ? "bg-blue-700" : "bg-pink-700";

  let time = new Date(message.updatedAt).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const handleOnClick = async () => {
    await deleteMessage({messageId})
  }

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={profilePic || fallbackProfile}
            alt={fullname || "profile"}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackProfile;
            }}
          />
        </div>
      </div>

      <div className={`chat-bubble ${bubbleBgColor}`}>{message.message}</div>

      <div className="chat-footer opacity-50">{time}</div>
      {fromMe && (
        <div className="flex space-x-3">
          <RiDeleteBin7Fill
            className="text-xl text-red-600 cursor-pointer"
            onClick={handleOnClick}
          />
          {/* <FaEdit className="text-xl cursor-pointer" /> */}
        </div>
      )}
    </div>
  );
};

export default Message;
