import React from "react";
import "./InvoiceCard.css";
import { useNavigate } from "react-router-dom";

const InvoiceCard = ({ invoice }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/view-invoice", { state: invoice });
  };
  return (
    <div className="invoice-card" onClick={handleClick}>
      <h6> {invoice.id} </h6>
      <p> {invoice.paymentDue} </p>
      <p> {invoice.clientName} </p>
      <h4 className="invoice-total"> £{invoice.total} </h4>
      <span className={`status ${invoice.status.toLowerCase()}`}>
        {invoice.status}
      </span>
    </div>
  );
};
export default InvoiceCard;
