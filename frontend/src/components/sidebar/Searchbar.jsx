import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
const Searchbar = () => {
  const [search, setSearch] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftkey) {
      e.preventDefault();
      e.currentTarget.form.requestSubmit();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    console.log(search);
    setSearch("");
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
