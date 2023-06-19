import React from "react";
import "./InvoiceCard.css";
import Arrow from "../assets/icon-arrow-right.svg";
import { useNavigate } from "react-router-dom";

const InvoiceCard = ({ invoice }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/view-invoice", { state: invoice });
  };
  return (
    <div className="invoice-card" onClick={handleClick}>
      <h6 className="invoice-id"> #{invoice.id} </h6>
      <p className="invoice-payment"> {invoice.paymentDue} </p>
      <p className="invoice-name"> {invoice.clientName} </p>
      <h4 className="invoice-total"> £{invoice.total} </h4>
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
      <img src={Arrow} alt="arrow-right" className="arrow-right" />
    </div>
  );
};
export default InvoiceCard;
