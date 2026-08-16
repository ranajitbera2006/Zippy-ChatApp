import React from "react";
import Searchbar from "../sidebar/Searchbar";
import { GrContact } from "react-icons/gr";
import Avator from "../parts/Avator";
import { Link } from "react-router-dom";

const ConvHeader = ({ selectedContact }) => {
  return (
    <div className="pb-5 flex items-center justify-between">
      <div className=" space-x-3 flex  items-center">
        <Avator profilePic={selectedContact.profilePic} />
        <h3 className="font-serif">{selectedContact.fullname}</h3>
      </div>
      <Link to="/conversations" aria-label="Chats">
        <GrContact className="text-xl cursor-pointer" />
      </Link>
    </div>
  );
};

export default ConvHeader;
