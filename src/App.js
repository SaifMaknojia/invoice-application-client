import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/homePage/HomePage";
import InvoiceDetailPage from "./pages/InvoiceDetailPage/InvoiceDetailPage";
import axios from "axios";
import { INVOICE_CONTEXT } from "./contextApi/InvoiceContext";

function App() {
  const { setAllInvoices } = useContext(INVOICE_CONTEXT);
  useEffect(() => {
    axios
      .get("/")
      .then((data) => setAllInvoices(data.data.invoices))
      .catch((err) => console.log(err));
  }, [setAllInvoices]);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/:id" element={<InvoiceDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
