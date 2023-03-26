import React from "react";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { cardActions } from "../../redux/slices/cardSlice";
import { useNavigate } from "react-router-dom";
const Card = ({ val }) => {
  const navigate = useNavigate();
  const showEditPage = (e) => {
    e.stopPropagation();
    navigate("/edit", {
      state: {
        ...val,
      },
    });
  };
  const { confirm } = Modal;
  const dispatch = useDispatch();
  const showDeleteModal = (e) => {
    e.stopPropagation();
    confirm({
      title: "Are you sure delete this card?",
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      className: "modalStyle",
      onOk() {
        dispatch(cardActions.deleteCard(val));
      },
      onCancel() {},
    });
  };
  const showIframe = () => {
    dispatch(cardActions.addToHistory({ ...val, time: Date.now() }));
    confirm({
      title: "IFrame",
      content: <iframe src={val.url} />,
      cancelText: "Back",
      okText: "",
      className: "modalStyle",
      okButtonProps: {
        disabled: true,
        style: {
          display: "none",
        },
      },
    });
  };

  return (
    <>
      <div
        className="justify-self-center bg-fuchsia-500/20 shadow rounded-lg p-4 cursor-pointer flex flex-col gap-2 w-[350px] overflow-hidden"
        onClick={showIframe}
      >
        <p className="">{val.name}</p>
        <iframe
          title={val.id}
          id="videoObject"
          type="text/html"
          src={val.url}
          frameborder="0"
          allowfullscreen
          className="border-4 rounded"
        ></iframe>
        <p className="italic">{val.category}</p>
        <div className="flex justify-between items-center">
          <button
            className="rounded py-1 px-3 text-white bg-[#6366F1]"
            onClick={showEditPage}
          >
            Edit
          </button>
          <button
            className="rounded py-1 px-3 text-white bg-[#6366F1]"
            onClick={showDeleteModal}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
