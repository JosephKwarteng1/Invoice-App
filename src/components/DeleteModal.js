import React from "react";
import "./DeleteModal.css";

const DeleteModal = ({ handleClose, show, children }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      handleClose();
    }
  };

  return (
    <div
      style={show ? { display: "block" } : { display: "none" }}
      className="modal"
      onClick={(e) => handleClick(e)}
    >
      <section className="modal-delete">{children}</section>
    </div>
  );
};

export default DeleteModal;
