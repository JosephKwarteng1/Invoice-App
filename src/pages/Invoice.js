import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import InvoiceCard from "../components/InvoiceCard";
import InvoiceButton from "../components/InvoiceButton";
import SideNav from "../components/SideNav";
import axios from "axios";
import EmptyInvoice from "../assets/illustration-empty.svg";

const Invoice = () => {
  const [invoices, setInvoice] = useState([]);
  useEffect(() => {
    const fetchInvoice = async () => {
      await axios
        .get("data.json")
        .then((invoice) => setInvoice(invoice.data))
        .catch((e) => console.log(e));
    };

    fetchInvoice();
  }, []);

  console.log(invoices);
  return (
    <>
      {/* <InvoiceCard /> */}
      <InvoiceButton />
      <SideNav />
      {/* <div className="invoice-container"> */}
      <h1
        style={{
          marginTop: "4rem",
          marginLeft: "4rem",
          marginLeft: "28rem",
          fontStyle: "black",
        }}
      >
        Invoices
      </h1>
      <p
        style={{
          marginTop: "1rem",
          marginLeft: "4rem",
          marginLeft: "28rem",
          fontSize: "12px",
        }}
      >
        There are 7 total invoices
      </p>
      {/* </div> */}

      {invoices.length > 0 ? (
        invoices.map((invoice) => (
          <InvoiceCard key={invoice.id} invoice={invoice} />
        ))
      ) : (
        <img src={EmptyInvoice} />
      )}
    </>
  );
};

export default Invoice;
