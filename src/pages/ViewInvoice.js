import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SideNav from "../components/SideNav";
import Arrow from "../assets/icon-arrow-left.svg";
import Modal from "./Modal";
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
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditModal = () => {
    setShowEditModal(!showEditModal);
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
            <div className="modal-btn">
              <div className="btn-gray " onClick={handleCancel}>
                Cancel
              </div>
              <div className="btn-red" onClick={handleDelete}>
                Delete
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <SideNav /> */}

      <p className="back-arrow"></p>
      <img src={Arrow} />
      <span className="go-back">Go back</span>

      <div className="card-container">
        <div className="buttons-container">
          <div className="status-section">
            <p className="status">Status</p>
            {/* <span className="dot"></span> */}
            <span className="dot"></span>
            <div className="pending-buttton">Pending</div>
          </div>
          <div className="buttons-section">
            <div className="edit-button">Edit</div>
            <div className="delete-button" onClick={() => setShowModal(true)}>
              Delete
            </div>

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
