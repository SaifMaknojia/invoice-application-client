import React, { useContext } from "react";
import "./homepage.css";
import HomePageCard from "./components/HomePageCard";
import { INVOICE_CONTEXT } from "../../contextApi/InvoiceContext";
import EmptyHomePage from "./EmptyHomePage";
import Navbar from "./components/Navbar";

const HomePage = () => {
  const { allInvoices, filterAllInvoices } = useContext(INVOICE_CONTEXT);

  const newInvoices =
    filterAllInvoices.length >= 1 ? filterAllInvoices : allInvoices;

  return (
    <div className="mb-5">
      <Navbar newInvoices={newInvoices} />
      {newInvoices.length >= 1 ? (
        <HomePageCard newInvoices={newInvoices} />
      ) : (
        <EmptyHomePage />
      )}
    </div>
  );
};

export default HomePage;
