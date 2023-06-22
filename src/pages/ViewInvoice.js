import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SideNav from "../components/SideNav";
import ArrowLeft from "../assets/icon-arrow-left.svg";
import IconDelete from "../assets/delete-icon.svg";
import Modal from "./Modal";
import DeleteModal from "../components/DeleteModal";

import "./Modal.css";
import "./ViewInvoice.css";

const ViewInvoice = () => {
  const { state } = useLocation();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [items, setItems] = useState(false);
  const [sendersStreet, setSendersStreet] = useState(
    state.senderAddress.street
  );
  const [sendersCity, setSendersCity] = useState(state.senderAddress.city);
  const [sendersPostCode, setSendersPostCode] = useState(
    state.senderAddress.postCode
  );
  const [sendersCountry, setSendersCountry] = useState(
    state.senderAddress.country
  );
  const [clientName, setClientName] = useState(state.clientName);
  const [clientEmail, setClientEmail] = useState(state.clientEmail);
  const [clientStreet, setClientStreet] = useState(state.clientAddress.street);
  const [clientCity, setClientCity] = useState(state.clientAddress.city);
  const [clientPostCode, setClientPostCode] = useState(
    state.clientAddress.postCode
  );
  const [clientCountry, setClientCountry] = useState(
    state.clientAddress.country
  );
  const [paymentDue, setPaymentDue] = useState(state.paymentDue);
  const [paymentTerms, setPaymentTerms] = useState(state.paymentTerms);
  const [description, setDescription] = useState(state.description);

  // Event handlers
  const handleMarkAsPaid = () => {
    setIsPaid(true);
  };

  const handleEditModal = () => {
    setShowEditModal(true);
  };
  const handleShowModal = () => {
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };
  const handleDeleteModal = () => {
    setShowDeleteModal(true);
  };
  const handlShowDeleteModal = () => {
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const goBack = () => {
    window.history.back();
  };

  const handleSaveChanges = () => {
    setShowEditModal(false);
    // Handle saving changes logic here
  };

  const handleDeleteInvoice = () => {
    // Perform delete logic here

    console.log("Deleting invoice: ", state.id);

    // Close the delete modal
    handleCloseDeleteModal();
  };

  return (
    <div>
      <SideNav />
      {showDeleteModal && (
        <DeleteModal
          show={showDeleteModal}
          handleClose={handleCloseDeleteModal}
        >
          <h2 className="custom-confirm-deletion">Confirm Deletion</h2>
          <p className="custom-deletion-text">
            Are you sure you want to delete invoice #XM9141? This action cannot
            be undone.
          </p>
          <button
            className="custom-btn-cancel"
            onClick={handleCloseDeleteModal}
          >
            Cancel
          </button>
          <button className="custom-btn-delete" onClick={handleDeleteInvoice}>
            Delete
          </button>
        </DeleteModal>
      )}
      {showEditModal && (
        <Modal
          show={showEditModal}
          dal
          handleClose={handleCloseEditModal}
          className="edit-modal-content"
        >
          <div className="modal-go-back" onClick={goBack}>
            <img className="go-back-arrow" src={ArrowLeft} alt="Go back" />
            <p className="go-back-textt">Go back</p>
          </div>
          <h2 className="section-id">Edit #{state?.id}</h2>
          <form>
            <div className="section-bill-from">
              <h5 className="bill-from">Bill From</h5>
              <div>
                <label>Street Address</label>
                <br />
                <input
                  type="text"
                  className="input-boxes fill"
                  value={sendersStreet}
                  onChange={(e) => setSendersStreet(e.target.value)}
                  required
                />
              </div>
              <div className="bill-row">
                <div>
                  <label>City</label>
                  <br />
                  <input
                    type="text"
                    className="input-boxes"
                    value={sendersCity}
                    onChange={(e) => setSendersCity(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Post Code</label>
                  <br />
                  <input
                    type="text"
                    className="input-boxes"
                    value={sendersPostCode}
                    onChange={(e) => setSendersPostCode(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Country</label>
                  <br />
                  <input
                    type="text"
                    className="input-boxes"
                    value={sendersCountry}
                    onChange={(e) => setSendersCountry(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="bill-to">
              <p className="bill-to-text">Bill To</p>
              <div>
                <label>Client Name</label>
                <br />
                <input
                  type="text"
                  className="input-boxes fill"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Client's Email</label>
                <br />
                <input
                  type="text"
                  className="input-boxes fill"
                  placeholder="e.g email@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Street Address</label>
                <br />
                <input
                  type="text"
                  className="input-boxes fill"
                  value={clientStreet}
                  onChange={(e) => setClientStreet(e.target.value)}
                  required
                />
              </div>
              <div className="bill-row">
                <div>
                  <label>City</label>
                  <br />
                  <input
                    type="text"
                    className="input-boxes"
                    value={clientCity}
                    onChange={(e) => setClientCity(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Post Code</label>
                  <br />
                  <input
                    type="text"
                    className="input-boxes"
                    value={clientPostCode}
                    onChange={(e) => setClientPostCode(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Country</label>
                  <br />
                  <input
                    type="text"
                    className="input-boxes"
                    value={clientCountry}
                    onChange={(e) => setClientCountry(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="bill-row">
              <div>
                <label>Invoice Date</label>
                <input
                  type="date"
                  className="input-boxes"
                  value={paymentDue}
                  onChange={(e) => setPaymentDue(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Payment Terms</label>
                <select
                  onChange={(e) =>
                    setPaymentTerms(
                      parseInt(e.target.value.substring(3, 6).trim())
                    )
                  }
                  type="payment-terms"
                  className="input-boxes"
                  value={paymentTerms}
                  required
                >
                  <option>Net 1 Day</option>
                  <option>Net 7 Day</option>
                  <option>Net 14 Day</option>
                  <option>Net 30 Day</option>
                </select>
              </div>
            </div>
            <div className="project-description">
              <label>Project Description</label>
              <input
                type="text"
                className="input-boxes fill"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="section-item">
              <div className="item-list">
                Item List
                {/* <thead>
                  <tr>
                    <th className="item-name">Item Name</th>
                    <th className="item-qty">QTY.</th>
                    <th className="item-price">Price</th>
                    <th className="item-total">Total</th>
                    <th className="delete"></th>
                  </tr>
                </thead> */}
              </div>

              <div className="table-container">
                <table className="items-table">
                  <tbody>
                    {state.items.length > 0
                      ? state.items.map((e, index) => (
                          <tr className="items-row" key={index}>
                            <td>
                              <input value={e.name} />
                            </td>
                            <td>
                              <input value={e.quantity} />
                            </td>
                            <td>
                              <input value={e.price} />
                            </td>
                            <td>
                              <input value={e.total} />
                            </td>
                            <td>
                              <img
                                src={IconDelete}
                                alt="delete icon"
                                className="delete-icon"
                                onClick={() => {
                                  const updatedItems = items.filter(
                                    (e, i) => i !== index
                                  );
                                  setItems(updatedItems);
                                }}
                              />
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="item-list-btn" onClick={handleShowModal}>
              + Add New Items
            </div>
            <div className="action-container action-btn-wrapper">
              <div className="action-btn"></div>
            </div>
            <div className="responsive-action-btn-wrapper">
              <div className="responsive-action-btn">
                <span>
                  <div></div>
                </span>
              </div>
            </div>
          </form>
          <button className="cancel-changes-btn">Cancel</button>
          <button className="save-changes-btn" onClick={handleSaveChanges}>
            Save Changes
          </button>
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
              className={`view-invoice-status ${
                state.status.toLowerCase() === "paid"
                  ? "paid"
                  : state.status.toLowerCase() === "draft"
                  ? "draft"
                  : "pending"
              }`}
            >
              <span className="dot"></span>
              {` ${state.status.toLowerCase()}`}
            </span>
          </div>

          <div className="buttons-section">
            <div className="edit-button" onClick={handleEditModal}>
              Edit
            </div>

            <div className="delete-button" onClick={handleDeleteModal}>
              Delete
            </div>

            {isPaid ? (
              <div className="mark-paid-button disabled">Marked as Paid</div>
            ) : (
              <div className="mark-paid-button" onClick={handleMarkAsPaid}>
                Mark as Paid
              </div>
            )}
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
          <div className="custom-invoice">
            <div className="invoice-date">
              <p>Invoice Date</p>
              <h4 className="current-date">{state.createdAt}</h4>
              <p className="payment-date">Payment Due</p>
              <h4 className="payment-due">{state.paymentDue}</h4>
            </div>
            <div className="custom-bill-to">
              <p>Bill To</p>
              <h4 className="bill-to-name">{state.clientName}</h4>
              <p className="bill-to-address">{state.clientAddress.street}</p>
              <p className="bill-to-city">{state.clientAddress.city}</p>
              <p className="bill-to-postal-code">
                {state.clientAddress.postCode}
              </p>
              <p className="bill-to-country">{state.clientAddress.country}</p>
            </div>
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
            <span className="amount-due">Amount due</span>
            <span className="total"> £{state.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewInvoice;
