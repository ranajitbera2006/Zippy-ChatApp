import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import useSoundEffect from "./useSoundEffect";
import whatsappNotification from "../assets/sounds/standard-whatsapp.mp3";


const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  
  const playSound = useSoundEffect(whatsappNotification)

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {

      playSound();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};
export default useListenMessages;

