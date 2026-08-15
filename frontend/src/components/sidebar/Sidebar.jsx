import React from "react";

import Footer from "../Footer";
import Contacts from "./Contacts";
import Header from "./Header";

const Sidebar = () => {
  return (
    <div className="p-3 flex flex-col h-screen overflow-hidden border-r border-slate-700 ">
      <Header />
      <main className="flex-1 overflow-y-auto min-h-0 py-2 ">
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Sidebar;
