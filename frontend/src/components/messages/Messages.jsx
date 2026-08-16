import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../skeleton/MessageSkeleton";
import { FaHandsClapping } from "react-icons/fa6";
import DateSeparator from "../../utils/DateSeparator";
import useListenMessages from "../../hooks/useListenMessages";
import useConversation from "../../zustand/useConversation";
import useSendMessage from "../../hooks/useSendMessage";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  let lastMessageRef = useRef()
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    },100);
  },[messages])

  return (
    <div className="flex flex-col">
      
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => {
          const currentDate = new Date(message.createdAt).toDateString();

          const previousDate =
            index > 0
              ? new Date(messages[index - 1].createdAt).toDateString()
              : null;

          const showDateBar = currentDate !== previousDate;
          const isLastMessage = index === messages.length - 1;
          return (
            <React.Fragment key={message._id}>
              {showDateBar && <DateSeparator date={message.createdAt} />}
              

              <div ref={isLastMessage ? lastMessageRef : null}>
                <Message message={message} />
              </div>
            </React.Fragment>
          );
        })}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && <NoMessagesYet />}
    </div>
  );
};


export default Messages;


const NoMessagesYet = () => {
  const { selectedConversation } = useConversation();
  const { loading, sendMessage } = useSendMessage()
  const handleOnClick = async () => {
    await sendMessage({ message: "👋 Hello!" });
  }
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
     
      <div className="text-5xl mb-4 animate-bounce">👋</div>

      
      <h3 className="text-lg font-semibold text-gray-100 mb-1">
        No messages here yet
      </h3>

      
      <p className="text-sm text-gray-400 max-w-xs mb-6">
        Send a message or tap below to say hello to{" "}
        <span className="text-gray-200 font-medium">
          {selectedConversation.fullname}
        </span>
        !
      </p>

      {/* 4. Quick Action Button */}
      <button
        onClick={handleOnClick}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
      >
        Say Hello 👋
      </button>
    </div>
  );
};
