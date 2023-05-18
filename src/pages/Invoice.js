import React, { useState, useEffect } from "react";
import InvoiceCard from "../components/InvoiceCard";
import InvoiceButton from "../components/InvoiceButton";
import SideNav from "../components/SideNav";
import "./Invoice.css";
import axios from "axios";
import EmptyInvoice from "../assets/illustration-empty.svg";
import ArrowDown from "../assets/icon-arrow-down.svg";

const Invoice = () => {
  const [invoices, setInvoice] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
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
  console.log(invoices);

  return (
    <>
      {/* <InvoiceCard /> */}
      <SideNav />
      {/* <p className="total-invoice">There are 7 invoices</p> */}
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
              <label>
                <input type="checkbox" name="status" value="draft" />
                Draft
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="status" value="pending" />
                Pending
              </label>
            </li>
            <li>
              <label>
                <input type="check" name="status" value="paid" />
                Paid
              </label>
            </li>
          </ul>
        )}
        <p className="invoice-actions">New Invoice</p>
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
