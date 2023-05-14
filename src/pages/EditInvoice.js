import React, { useState } from "react";
import "./EditInvoice.css";

const EditInvoice = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Edit</button>
      {isVisible && (
        <div className="modal-container">
          <div className="modal">
            <form className="bill-form">
              <h2>Edit Invoice</h2>
              <div className="form-group">
                <label htmlFor="street-address">Street Address:</label>
                <input type="text" id="street-address" name="street-address" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" />
              </div>
              <div className="form-group">
                <label htmlFor="post-code">Post Code:</label>
                <input type="text" id="post-code" name="post-code" />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" />
              </div>
              <div className="bill-to" />
              <h3>Bill To:</h3>
              <div className="form-group">
                <label htmlFor="client-name">Client's Name:</label>
                <input type="text" id="client-name" name="client-name" />
              </div>
              <div className="form-group">
                <label htmlFor="client-email">Client's Email:</label>
                <input type="email" id="client-email" name="client-email" />
              </div>
              <div className="form-group">
                <label htmlFor="client-address">Client's Address:</label>
                <input type="text" id="client-address" name="client-address" />
              </div>
              <div className="form-group">
                <label htmlFor="invoice-date">Invoice Date:</label>
                <input type="date" id="invoice-date" name="invoice-date" />
              </div>
              <div className="form-group">
                <label htmlFor="payment-terms">Payment Terms:</label>
                <input type="number" id="payment-terms" name="payment-terms" />
                <span>days</span>
              </div>
              <div className="form-group">
                <label htmlFor="project-description">
                  Project Description:
                </label>
                <textarea
                  id="project-description"
                  name="project-description"
                  rows="5"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="hourly-rate">Hourly Rate:</label>
                <input type="number" id="hourly-rate" name="hourly-rate" />
              </div>
              <div className="form-group">
                <label htmlFor="hours-worked">Hours Worked:</label>
                <input type="number" id="hours-worked" name="hours-worked" />
              </div>
              <div className="form-group">
                <label htmlFor="total-amount">Total Amount:</label>
                <input type="number" id="total-amount" name="total-amount" />
              </div>
              <div className="form-actions">
                <button type="submit">Update</button>
                <button type="button">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditInvoice;
