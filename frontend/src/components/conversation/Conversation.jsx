import React from "react";
import ConvHeader from "./ConvHeader";
import Messages from "../messages/Messages";
import ConvFooter from "./ConvFooter";
import { FaHandsClapping } from "react-icons/fa6";

const Conversation = ({ selectedConversation, onBack }) => {
  const noChatSelected = false;
  return (
    <div className="px-4 pt-2 flex flex-col h-screen overflow-hidden border-r border-slate-700">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <ConvHeader />
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
      <div className="text-4xl mb-3 text-amber-400">
        <FaHandsClapping className="inline-block" />
      </div>
      <h2 className="text-2xl font-semibold text-white mb-2">Welcome!</h2>
      <p className="text text-slate-400 max-w-sm">
        Select a conversation from the sidebar to start messaging.
      </p>
    </div>
  );
};
