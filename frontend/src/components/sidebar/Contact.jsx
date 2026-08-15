import React from "react";
import Avator from "../parts/Avator";

const Contact = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded cursor-pointer p-2 py-1">
        <Avator />
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">Ranajit Bera</p>
            <span className="text-xl">😊</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Contact;
