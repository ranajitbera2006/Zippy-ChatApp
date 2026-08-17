//Define global variable using zustand (another type)
import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) =>
    set((state) => ({
      messages:
        typeof messages === "function" ? messages(state.messages) : messages,
    })),
  selectedMessage: null,
  setSelectedMessage: (selectedMessage) => set({ selectedMessage }),
}));

export default useConversation;
