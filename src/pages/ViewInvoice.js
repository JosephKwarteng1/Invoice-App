import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SideNav from "../components/SideNav";
// import EditInvoiceModal from "./EditInvoiceModal";
import "./ViewInvoice.css";

const ViewInvoice = () => {
  const { state } = useLocation();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    // handle delete logic here
    setShowModal(false);
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className="modal-background">
          <div className="delete-modal">
            <h4 className="confirmation">Confirm Deletion</h4>
            <p className="modal-text">
              Are you sure you want to delete invoice #XM9141? This action
              cannot be undone.
            </p>
            <div className="modal-buttons">
              <div className="cancel-button blue " onClick={handleCancel}>
                Cancel
              </div>
              <button className="delete-button red" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <SideNav />
      {/* <EditInvoiceModal /> */}
      <div className="card-container">
        <div className="buttons-container">
          {/* <p>Status</p> */}
          {/* <div className="pending-buttton">Pending</div> */}
          <div className="edit-button">Edit</div>
          <div className="delete-button" onClick={() => setShowModal(true)}>
            Delete
          </div>
          <div className="mark-paid-button">Mark as Paid</div>
        </div>
      </div>
      <div className="invoice-container">
        <div className="header">
          <div className="header-left">
            <h1 className="invoice-id">{state.id}</h1>
            <div>
              <p className="invoice-category">Graphic Design</p>
            </div>
          </div>
          <div className="header-right">
            <p className="invoice-portfolio">{state.address}</p>
            <p className="invoice-city">{state.city}</p>
            <p className="postal-code">{state.postalCode}</p>
            <p className="invoice-country">{state.country}</p>
          </div>
        </div>
        <div className="bill-info">
          <div className="invoice-date">
            <p>Invoice Date</p>
            <h4 className="current-date">{state.date}</h4>
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
        <div className="mini-container" />
        <div>
          <p className="amount-due">Amount Due</p>
          <div className="total-amount">
            <h3>{state.total}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewInvoice;
