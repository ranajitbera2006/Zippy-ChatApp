import React, { useState } from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import Searchbar from "../sidebar/Searchbar";
import { BsSendFill } from "react-icons/bs";

const ConvFooter = () => {
  const [message, setMessage] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.currentTarget.form.requestSubmit();
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    console.log(message);
    setMessage("");
  };
  return (
    <div className="my-2.5  px-3 shrink-0 z-40">
      <form onSubmit={submitHandler} className="flex justify-around space-x-2">
        <textarea
          name="message"
          rows={2}
          id="message"
          className="w-full px-2 focus:outline-none glass rounded-2xl resize-none no-scrollbar overflow-auto"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyDown={handleKeyDown}
        ></textarea>
        <button
          type="submit"
          className="rounded-full w-12 border-none border bg-green-600 flex justify-center items-center cursor-pointer"
        >
          <BsSendFill className="text-xl" />
        </button>
      </form>
    </div>
  );
};

export default ConvFooter;
