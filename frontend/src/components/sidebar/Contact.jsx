import React from "react";
import Avator from "../parts/Avator";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const Contact = ({ contact, lastIdx }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelectedConversation = selectedConversation?._id === contact._id;

  const isAuth = authUser._id === contact._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-slate-700/40 rounded cursor-pointer p-2 py-1 ${
          isSelectedConversation ? "bg-slate-700/70" : ""
        }`}
        onClick={() => setSelectedConversation(contact)}
      >
        <Avator user={contact} />

        <div className="flex flex-1 justify-between min-w-0">
          <div className="flex flex-col min-w-0">
            <p className="font-bold text-gray-200">
              {isAuth ? `${contact.fullname} (You)` : contact.fullname}
            </p>

            <p className="text-sm text-gray-400 truncate">
              {contact.lastMessage?.message || "No messages yet"}
            </p>
          </div>

          <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">
            {contact.lastMessage
              ? new Date(
                  contact.lastMessage.updatedAt ||
                    contact.lastMessage.createdAt,
                ).toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
              : ""}
          </span>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Contact;
