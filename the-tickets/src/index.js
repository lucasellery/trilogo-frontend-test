import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ConfigProvider } from "antd";
import store from "./store/store";
import { Provider } from "react-redux";

import ptBR from "antd/lib/locale/pt_BR";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={ptBR}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
