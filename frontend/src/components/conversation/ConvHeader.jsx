import React from "react";
import Searchbar from "../sidebar/Searchbar";
import { GrContact } from "react-icons/gr";
import Avator from "../parts/Avator";


const ConvHeader = ({ selectedContact, onBack }) => {
  return (
    <div className="pb-5 flex items-center justify-between">
      <div className=" space-x-3 flex  items-center">
        <Avator user={selectedContact} />
        <h3 className="font-serif">{selectedContact.fullname}</h3>
      </div>
      <button
        title="Contact list"
        onClick={onBack}
        aria-label="Back to contacts"
        className="md:hidden w-16 h-10 rounded items-center  flex justify-center hover:bg-black cursor-pointer"
      >
        <GrContact className="text-xl cursor-pointer" />
      </button>
    </div>
  );
};

export default ConvHeader;
