import React from "react";
import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useDeleteMessage = () => {
  const [loading, setLoading] = useState(false);
  const { setMessages } = useConversation();
  const deleteMessage = async ( {messageId} ) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/message/deleteMessage/${messageId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error);
      }
      setMessages((preMessages) =>
        preMessages.filter((message) => message._id !== messageId),
      );
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteMessage };
};

export default useDeleteMessage;
