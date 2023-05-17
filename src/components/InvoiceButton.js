import React, { useState } from "react";
import "./InvoiceButton.css";

const InvoiceButton = ({ onClick }) => {
  const [showModal, setShowModal] = useState(false);

  const handleNewInvoiceClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="button-container">
      {/* <div onClick={handleNewInvoiceClick} className="invoice-button">
        <p className="new-invoice">New Invoice</p>
      </div> */}
      {/* <div className="filter-by-status">
        <span>Filter by status</span>
        <svg viewBox="0 0 20 20">
          <path d="M2.5,7.5 L10,15 L17.5,7.5"></path>
        </svg>
        <select id="status-filter">
          <option value="all">All</option>
          <option value="draft">Draft</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
        </select>
      </div> */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>New Invoice</h2>
            {/* Add form to create new invoice here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceButton;
