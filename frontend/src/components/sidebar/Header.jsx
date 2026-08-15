import React from "react";
import Searchbar from "./Searchbar";
const Header = () => {
  return (
    <div className="space-y-3 pb-2">
      <h2 className="font-bold text-primary text-3xl pt-4 ">My Chat</h2>
      <Searchbar />
    </div>
  );
};

export default Header;
