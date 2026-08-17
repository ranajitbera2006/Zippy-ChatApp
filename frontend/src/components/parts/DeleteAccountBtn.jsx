import React from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const DeleteAccountBtn = () => {
  return (
    <Link
      to="/farewell"
      className=" w-16 h-8 rounded items-center  flex justify-center hover:bg-background cursor-pointer text-red-600"
      title="Delete Account"
    >
      <RiDeleteBin7Fill className="text-2xl" />
    </Link>
  );
};

export default DeleteAccountBtn;
