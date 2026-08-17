import React from "react";
import Searchbar from "./Searchbar";
const Header = () => {
  return (
    <div className="space-y-3 pb-2">
      <div className="flex text-center items-center justify-between">
        <h2 className="font-bold text-primary italic font-sans text-3xl pt-4 ">
          Zippy
        </h2>
        
      </div>
      <Searchbar />
    </div>
  );
};

export default Header;
