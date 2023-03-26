import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const openAddCardPage = () => {
    navigate("/add");
  };
  return (
    <div className="p-4 px-10 flex justify-between text-[#f8f9fa] font-bold">
      <Link className="bg-fuchsia-500/20 px-4 py-1.5 rounded-lg" to="/">
        Video Buckets
      </Link>
      <div className="flex gap-7">
        {/* <button
            className="px-2 py-1 border-2 border-red-500 rounded-lg text-red-500"
            onClick={openAddCardPage}
          >
            + Add Card
          </button> */}
        <button
          className="bg-fuchsia-500/20 px-4 py-1.5 rounded-lg"
          onClick={openAddCardPage}
        >
          + Add Card
        </button>
        <Link
          className="bg-fuchsia-500/20 px-4 py-1.5 rounded-lg"
          to="/history"
        >
          History
        </Link>
      </div>
    </div>
  );
};

export default Header;
