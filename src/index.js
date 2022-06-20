import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import INVOICECONTEXTPROVIDER from "./contextApi/InvoiceContext";
import axios from "axios";

axios.defaults.baseURL =
  "https://invoices-restful-api.herokuapp.com/api/v1/invoices";

ReactDOM.render(
  <React.StrictMode>
    <INVOICECONTEXTPROVIDER>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </INVOICECONTEXTPROVIDER>
  </React.StrictMode>,
  document.getElementById("root")
);
