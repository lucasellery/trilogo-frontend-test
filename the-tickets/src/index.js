import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ConfigProvider } from "antd";
import store from "./store/store";
import { Provider } from "react-redux";

import ptBR from "antd/lib/locale/pt_BR";
import "antd/dist/antd.css";
import { addTicket } from './store/Tickets/Tickets.actions';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
