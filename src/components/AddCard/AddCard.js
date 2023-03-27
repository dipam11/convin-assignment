import React, { useState } from "react";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { cardActions } from "../../redux/slices/data";
import { useNavigate } from "react-router-dom";
const AddCard = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const addCard = () => {
    if (isEmpty(name)) {
      messageApi.warning("Name is empty");
      return;
    }
    if (isEmpty(url)) {
      messageApi.warning("Url is empty");
      return;
    }
    if (isEmpty(category)) {
      messageApi.warning("Category is empty");
      return;
    }
    dispatch(
      cardActions.addCard({
        name,
        category,
        url,
      })
    );

    messageApi.success("Card Added Successfully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const isEmpty = (val) => val.trim() === "";
  return (
    <div
      className="p-8 grid place-items-center "
      style={{
        height: "calc(100vh - 48px)",
      }}
    >
      {contextHolder}
      <div className="bg-fuchsia-500/20 flex w-[500px] justify-center flex-col gap-5 shadow rounded-lg p-10 text-[#f8f9fa]">
        <div className="flex gap-4 justify-self-center">
          <span className="w-16">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b w-full border-[#5a189a] bg-[#240046] rounded p-0.5"
          />
        </div>
        <div className="flex gap-4 justify-self-center">
          <span className="w-16">Url</span>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border-b w-full border-[#5a189a] bg-[#240046] rounded p-0.5"
          />
        </div>
        <div className="flex gap-4 justify-self-center">
          <span className="w-16">Category</span>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-[#5a189a] w-full bg-[#240046] rounded p-0.5"
          />
        </div>
        <div className="">
          <button
            className="shadow bg-[#6366f1] text-white py-1 px-3 rounded"
            onClick={addCard}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
