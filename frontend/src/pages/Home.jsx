import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Conversation from "../components/conversation/Conversation";

const Home = () => {
  // Store the selected chat/user (null if no conversation is open)
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#111b21] flex justify-center items-center">
      {/* Main WhatsApp Window */}
      <div className="w-full h-full flex overflow-hidden">
        {/* Left Panel: Sidebar */}
        <div
          className={`w-full md:w-[35%] lg:w-[30%] min-w-75 h-full flex-col border-r border-[#222d34] ${
            selectedConversation ? "hidden md:flex" : "flex"
          }`}
        >
          <Sidebar onSelectConversation={setSelectedConversation} />
        </div>

        {/* Right Panel: Active Chat */}
        <div
          className={`flex-1 h-full flex-col bg-[#0b141a] ${
            selectedConversation ? "flex" : "hidden md:flex"
          }`}
        >
          <Conversation
            selectedConversation={selectedConversation}
            onBack={() => setSelectedConversation(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
