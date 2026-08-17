import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSocketContext } from "../context/SocketContext";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);

  const { socket } = useSocketContext();

  // Get initial contacts
  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);

      try {
        const res = await fetch("/api/user");

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setContacts(data);
      } catch (error) {
        console.error("getConversation error:", error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversation();
  }, []);

  // Listen for new messages
  useEffect(() => {
    if (!socket) {
      console.log("Socket not available");
      return;
    }

    const handleNewMessage = (newMessage) => {

      const senderId = newMessage.senderId?.toString();
      const receiverId = newMessage.receiverId?.toString();

      setContacts((prevContacts) => {
        const index = prevContacts.findIndex((contact) => {
          const contactId = contact._id?.toString();

          return contactId === senderId || contactId === receiverId;
        });

        // Contact not found
        if (index === -1) {
          console.log("Contact not found for message");
          return prevContacts;
        }

        const contact = prevContacts[index];

        const updatedContact = {
          ...contact,

          lastMessage: {
            ...newMessage,
            senderId,
            receiverId,
          },
        };

        // Remove old position
        const newContacts = prevContacts.filter((_, i) => i !== index);

        // Put contact at the top
        return [updatedContact, ...newContacts];
      });
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket]);

  return {
    loading,
    contacts,
  };
};

export default useGetConversation;
