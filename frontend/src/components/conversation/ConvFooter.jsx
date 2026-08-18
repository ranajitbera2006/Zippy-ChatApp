import React, { useState } from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import Searchbar from "../sidebar/Searchbar";
import { BsSendFill } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
// import useSoundEffect from "../../hooks/useSoundEffect";

const ConvFooter = () => {
  // const playSound = useSoundEffect("notification/popup");
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.currentTarget.form.requestSubmit();
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const success = await sendMessage({ message });
    if (success) {
      // playSound();
      setMessage("");
    }
  };
  return (
    <div className="my-2.5  px-3 shrink-0 z-40">
      <form onSubmit={submitHandler} className="flex justify-around space-x-2">
        <textarea
          name="message"
          rows={2}
          id="message"
          className="w-full px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none glass rounded-2xl resize-none no-scrollbar overflow-auto"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        ></textarea>
        <button
          type="submit"
          className="rounded-full w-12 border-none border bg-green-600 flex justify-center items-center cursor-pointer"
        >
          {loading ? (
            <span className="loading loading-spinner text-xl" />
          ) : (
            <BsSendFill className="text-xl" />
          )}
        </button>
      </form>
    </div>
  );
};

export default ConvFooter;
