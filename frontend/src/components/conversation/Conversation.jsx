import React, { useEffect } from "react";
import ConvHeader from "./ConvHeader";
import Messages from "../messages/Messages";
import ConvFooter from "./ConvFooter";
import useConversation from "../../zustand/useConversation";

const Conversation = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  return (
    <div className="px-4 pt-2 flex flex-col h-screen overflow-hidden border-r border-slate-700">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <ConvHeader selectedContact={selectedConversation} />
          <main className="flex-1 overflow-y-auto min-h-0 py-2 ">
            <Messages />
          </main>
          <ConvFooter />
        </>
      )}
    </div>
  );
};

export default Conversation;

const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 text-slate-300">
      <div className="text-5xl mb-4 animate-bounce">👋</div>
      <h2 className="text-2xl font-semibold text-white mb-2">Welcome!</h2>
      <p className="text text-slate-400 max-w-sm">
        Select a conversation from the sidebar to start messaging.
      </p>
    </div>
  );
};
