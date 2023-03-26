import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardActions } from "../../redux/slices/cardSlice";

const Sidebar = () => {
  const cardObj = useSelector((state) => state.card.cardObj);
  const [buckets, setBuckets] = useState(Object.keys(cardObj));
  const activeCategory = useSelector((state) => state.card.activeCategory);
  const dispatch = useDispatch();
  const updateCategory = (val) => {
    dispatch(cardActions.updateActiveCategory(val));
  };
  return (
    <div className="bg-fuchsia-500/20 h-full w-full text-white grid rounded-lg">
      <div className="gap-4 text-lg flex flex-col p-8 ">
        {buckets.map((val, index) => {
          return (
            <div
              className={`flex justify-center cursor-pointer p-2   rounded-lg ${
                activeCategory === val ? " bg-[#14213D] " : "text-[#f8f9fa]"
              }`}
              key={index}
              onClick={() => {
                updateCategory(val);
              }}
            >
              {val}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
