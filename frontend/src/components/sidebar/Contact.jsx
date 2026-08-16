import React from "react";
import Avator from "../parts/Avator";
import useConversation from "../../zustand/useConversation";


const Contact = ({ contact, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelectedConversation = selectedConversation?._id === contact._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-slate-700/40 rounded cursor-pointer p-2 py-1 ${isSelectedConversation ? "bg-slate-700/70" : ""}`}
        onClick={() => setSelectedConversation(contact)}
      >
        <Avator profilePic={contact.profilePic} />
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{contact.fullname}</p>
            <span className="text-xl">😊</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Contact;
