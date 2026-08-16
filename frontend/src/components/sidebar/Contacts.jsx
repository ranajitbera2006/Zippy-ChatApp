import React from "react";
import Contact from "./Contact";
import useGetConversation from "../../hooks/useGetConversation";

const Contacts = () => {
  const { loading, contacts } = useGetConversation();

  return (
    <div>
      {contacts.map((contact,idx)=>(
        <Contact
        key={contact._id}
        contact = {contact}
        lastIdx = {idx === contacts.length-1}
        />
      ))}
      {loading?<span className="loading loading-spinner mx-auto"/>:null}
    </div>
  );
};

export default Contacts;
