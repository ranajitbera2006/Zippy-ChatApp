import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";
const Searchbar = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { contacts } = useGetConversation();
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftkey) {
      e.preventDefault();
      e.currentTarget.form.requestSubmit();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    const contact = contacts.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase()),
    );
    if (contact) {
      setSelectedConversation(contact);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <div>
      <div className="mb-5">
        <form onSubmit={handleSubmit}>
          <div className="glass w-full max-w-md flex justify-between rounded-xl">
            <input
              type="text"
              placeholder="Search here..."
              required
              className="w-full px-2 focus:outline-none"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyDown={handleKeyDown}
            />
            <button
              type="submit"
              className=" text-white px-3 py-2 rounded-r-xl cursor-pointer "
            >
              {" "}
              <CiSearch className="text-2xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
