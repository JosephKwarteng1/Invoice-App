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
