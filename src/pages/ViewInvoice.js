import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SideNav from "../components/SideNav";
import ArrowLeft from "../assets/icon-arrow-left.svg";
import Modal from "./Modal";
import "./Modal.css";
import "./ViewInvoice.css";

const ViewInvoice = () => {
  const { state } = useLocation();
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const goBack = () => {
    window.history.back();
  };

  const handleSaveChanges = () => {
    // Handle saving changes logic here
    setShowEditModal(false);
  };

  const invoice = state;
  return (
    <div>
      <SideNav />
      {showEditModal && (
        <Modal show={showEditModal} handleClose={handleCloseEditModal}>
          <h2>Edit #{invoice.id} </h2>
          <form>
            <div className="form-group">
              <div>
                <span className="bill-from">Bill From</span>
              </div>
              <div>
                <label htmlFor="billFromStreet" className="street-address">
                  Street Address
                </label>
              </div>
              <input
                className="input-area"
                type="text"
                id="billFromStreet"
                name="billFromStreet"
                defaultValue="19 Union Terrace"
              />
            </div>

            <div className="form-group">
              <label htmlFor="billFromCity">
                <span className="city"> City </span>
              </label>
              <input
                className="city-text-area"
                type="text"
                id="billFromCity"
                name="billFromCity"
                defaultValue="London"
              />
            </div>
            <div className="form-group">
              <label htmlFor="billFromPostCode">
                <span className="bill-from-postcode"> Post Code </span>
              </label>
              <input
                type="text"
                id="billFromPostCode"
                name="billFromPostCode"
                defaultValue="E1 3EZ"
              />
            </div>
            <div className="form-group">
              <label htmlFor="billFromCountry">
                {" "}
                <span className="bill-from-country"> Country </span>{" "}
              </label>
              <input
                type="text"
                id="billFromCountry"
                name="billFromCountry"
                defaultValue="United Kingdom"
              />
            </div>
            <div className="form-group">
              <label htmlFor="billToName">
                {" "}
                <span className="bill-to-name"> Bill To </span>
                <span className="bill-to-client"> Client's Name </span>
              </label>
              <input
                type="text"
                id="billToName"
                name="billToName"
                defaultValue="Alex Grim"
              />
            </div>
            <div className="form-group">
              <label htmlFor="billToEmail">
                {" "}
                <span className="bill-to-Email"> Client's Email </span>{" "}
              </label>
              <input
                type="email"
                id="billToEmail"
                name="billToEmail"
                defaultValue="alexgrim@mail.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="billToStreet">
                {" "}
                <span className="bill-to-street"> Street Address </span>{" "}
              </label>
              <input
                type="text"
                id="billToStreet"
                name="billToStreet"
                defaultValue="84 Church Way"
              />
            </div>
            <div className="form-group">
              <label htmlFor="billToCity">
                {" "}
                <span className="bill-to-city"> City</span>
              </label>
              <input
                type="text"
                id="billToCity"
                name="billToCity"
                defaultValue="Bradford"
              />
            </div>
            <div className="form-group">
              <label htmlFor="billToPostCode">
                {" "}
                <span className="bill-to-postcode"> Post Code</span>{" "}
              </label>
              <input
                type="text"
                id="billToPostCode"
                name="billToPostCode"
                defaultValue="BD1 9PB"
              />
            </div>
            <div className="form-group">
              <label htmlFor="billToCountry">
                {" "}
                <span className="bill-to-country"> country </span>{" "}
              </label>
              <input
                type="text"
                id="billToCountry"
                name="billToCountry"
                defaultValue="United Kingdom"
              />
            </div>
            <div className="form-group">
              <label htmlFor="invoiceDate">
                {" "}
                <span className="invoice-date"> Invoice Date </span>
              </label>
              <input
                type="text"
                id="invoiceDate"
                name="invoiceDate"
                defaultValue="21 Aug 2021"
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentTerms">
                {" "}
                <span className="payment-terms"> Payment Terms </span>
              </label>
              <input
                type="text"
                id="paymentTerms"
                name="paymentTerms"
                defaultValue="Net 30 Days"
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectDescription">
                {" "}
                <span className="project-description">
                  Project / Description
                </span>
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                defaultValue="Lorem Ipsum Dolor"
              />
            </div>
          </form>
          <button onClick={handleSaveChanges}>Save Changes</button>
        </Modal>
      )}
      <div className="go-back" onClick={goBack}>
        <img className="arrow-img" src={ArrowLeft} alt="Go back" />
        <p className="go-back-text">Go back</p>
      </div>
      <div className="card-container">
        <div className="buttons-container">
          <div className="status-section">
            <p className="status">Status</p>
            <span
              className={`invoice-status ${
                invoice.status.toLowerCase() === "paid"
                  ? "paid"
                  : invoice.status.toLowerCase() === "draft"
                  ? "draft"
                  : "pending"
              }`}
            >
              <span className="dot"></span>
              {` ${invoice.status.toLowerCase()}`}
            </span>
          </div>

          <div className="buttons-section">
            <div className="edit-button" onClick={handleEditModal}>
              Edit
            </div>

            <div className="delete-button">Delete</div>

            <div className="mark-paid-button">Mark as Paid</div>
          </div>
        </div>
      </div>
      <div className="invoice-container">
        <div className="header">
          <div className="header-left">
            <div className="invoice-detail">
              <div>
                <h1 className="invoice-id">#{state.id}</h1>
                <p className="invoice-category">Graphic Design</p>
              </div>

              <div className="header-right">
                <p className="invoice-street">{state.senderAddress.street}</p>
                <p className="invoice-city">{state.senderAddress.city}</p>
                <p className="postal-code">{state.senderAddress.postCode}</p>
                <p className="invoice-country">{state.senderAddress.country}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bill-info">
          <div className="invoice-date">
            <p>Invoice Date</p>
            <h4 className="current-date">{state.createdAt}</h4>
            <p className="payment-date">Payment Due</p>
            <h4 className="payment-due">{state.paymentDue}</h4>
          </div>
          <div className="bill-to">
            <p>Bill To</p>
            <h4 className="bill-to-name">{state.clientName}</h4>
            <p className="bill-to-address">{state.clientAddress.street}</p>
            <p className="bill-to-city">{state.clientAddress.city}</p>
            <p className="bill-to-postal-code">
              {state.clientAddress.postCode}
            </p>
            <p className="bill-to-country">{state.clientAddress.country}</p>
          </div>
          <div className="sent-to">
            <p>Sent To</p>
            <h4 className="sent-to-email">{state.clientEmail}</h4>
          </div>
        </div>
        <div className="small-container">
          <div className="items">
            <div className="item-header">
              <p>Item Name</p>
              <p>QTY.</p>
              <p>Price</p>
              <p>Total</p>
            </div>
            <div className="item-list">
              <div className="item-row">
                <p className="item-one">Banner Design</p>
                <p className="qty-one">1</p>
                <p className="price-one">£ 156.00</p>
                <p className="total-one">£ 156.00</p>
              </div>
              <div className="item-row">
                <p className="item-two">Email Design</p>
                <p className="qty-two">2</p>
                <p className="price-two">£ 200.00</p>
                <p className="total-two">£ 400.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mini-container">
          <div className="amount-section">
            <span>Amount due</span>
            <span className="total"> £{state.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewInvoice;
