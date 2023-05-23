import React, { useState, useEffect } from "react";
import InvoiceCard from "../components/InvoiceCard";
import InvoiceButton from "../components/InvoiceButton";
import SideNav from "../components/SideNav";
import "./Invoice.css";
import axios from "axios";
import Modal from "./Modal";
import "./Modal.css";
import EmptyInvoice from "../assets/illustration-empty.svg";
import ArrowDown from "../assets/icon-arrow-down.svg";

const initialState = {
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientName: "",
  clientEmail: "",
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  paymentDue: "",
  paymentTerms: "",
  description: "",
};

const Invoice = () => {
  const [invoices, setInvoice] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showNewInvoiceModal, setShowNewInvoiceModal] = useState(false);
  const [sendersStreet, setSendersStreet] = useState(
    initialState.senderAddress.street
  );
  const [sendersCity, setSendersCity] = useState(
    initialState.senderAddress.city
  );
  const [sendersPostCode, setSendersPostCode] = useState(
    initialState.senderAddress.postCode
  );
  const [sendersCountry, setSendersCountry] = useState(
    initialState.senderAddress.country
  );
  const [clientName, setClientName] = useState(initialState.clientName);
  const [clientEmail, setClientEmail] = useState(initialState.clientEmail);
  const [clientStreet, setClientStreet] = useState(
    initialState.clientAddress.street
  );
  const [clientCity, setClientCity] = useState(initialState.clientAddress.city);
  const [clientPostCode, setClientPostCode] = useState(
    initialState.clientAddress.postCode
  );
  const [clientCountry, setClientCountry] = useState(
    initialState.clientAddress.country
  );
  const [paymentDue, setPaymentDue] = useState(initialState.paymentDue);
  const [paymentTerms, setPaymentTerms] = useState(initialState.paymentTerms);
  const [description, setDescription] = useState(initialState.description);

  const handleNewInvoiceModal = () => {
    setShowNewInvoiceModal(true);
  };

  const handleShowModal = () => {
    setShowNewInvoiceModal(true);
  };

  const handleCloseNewInvoiceModal = () => {
    setShowNewInvoiceModal(false);
  };

  useEffect(() => {
    const fetchInvoice = async () => {
      await axios
        .get("data.json")
        .then((invoice) => setInvoice(invoice.data))
        .catch((e) => console.log(e));
    };

    fetchInvoice();
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  console.log(invoices);

  return (
    <>
      <SideNav />
      <Modal
        show={showNewInvoiceModal}
        handleClose={handleCloseNewInvoiceModal}
      >
        <h2 className="section-hero">New Invoice</h2>
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
          <div>
            <label className="project-dscription">Project Description</label>
            <input
              type="text"
              className="input-boxes fill"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="section-item">
            <div className="item-list">Item List</div>
            <div className="item-header">
              <div className="item-name">Item Name</div>
              <div className="qty smaller">Qty.</div>
              <div className="price">Price</div>
              <div className="total">Total</div>
            </div>
            <div className="section-grid">
              <div className="item">
                <div className="item-container">
                  <div className="item-name">
                    <input
                      type="text"
                      className="input-boxes"
                      placeholder="Banner Design"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="qty-input-boxes"
                  placeholder="Qty."
                />
                <input
                  type="text"
                  className="price-input-boxes"
                  placeholder="Price"
                />
                <input
                  type="text"
                  className="total-input-boxes"
                  placeholder="Total"
                />
              </div>
              <div className="item">
                <div className="item-container">
                  <div className="item-name">
                    <input
                      type="text"
                      className="input-boxes"
                      placeholder="Email Design"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="qty-input-boxes"
                  placeholder="Qty."
                />
                <input
                  type="text"
                  className="price-input-boxes"
                  placeholder="Price"
                />
                <input
                  type="text"
                  className="total-input-boxes"
                  placeholder="Total"
                />
              </div>
            </div>
          </div>
        </form>
      </Modal>
      <div className="main-container">
        <h1 className="title">Invoices</h1>

        <p className="invoice-filter">Filter by status</p>
        <img
          className="filter-arrow"
          src={ArrowDown}
          alt="arrow-down"
          onClick={handleDropdownToggle}
        />

        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li>
              <label className="filter-label">
                <input
                  type="checkbox"
                  name="status"
                  value="draft"
                  checked={selectedOption === "Draft"}
                  onChange={handleOptionChange}
                />
                Draft
              </label>
            </li>
            <li>
              <label className="filter-label">
                <input
                  type="checkbox"
                  name="status"
                  value="pending"
                  checked={selectedOption === "Pending"}
                  onChange={handleOptionChange}
                />
                Pending
              </label>
            </li>
            <li>
              <label className="filter-label">
                <input
                  type="checkbox"
                  name="status"
                  value="paid"
                  checked={selectedOption === "Paid"}
                  onChange={handleOptionChange}
                />
                Paid
              </label>
            </li>
          </ul>
        )}
        <p class="invoice-actions" onClick={handleShowModal}>
          <span class="circle">+</span>
          New Invoice
        </p>
      </div>

      <InvoiceButton />

      <div className="invoice-list">
        {invoices.length > 0 ? (
          invoices.map((invoice) => (
            <InvoiceCard key={invoice.id} invoice={invoice} />
          ))
        ) : (
          <div className="empty-invoice-container">
            <img
              className="empty-invoice"
              src={EmptyInvoice}
              alt="No invoices"
            />
            <p className="empty-invoice-text">There is nothing here</p>
            <p className="create-invoice-text">
              {" "}
              Create an invoice by clicking the <br></br>
              <strong>New Invoice </strong>
              button and get started
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Invoice;
