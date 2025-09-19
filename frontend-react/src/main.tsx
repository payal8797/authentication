import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider, App as AntdApp } from "antd";
import "antd/dist/reset.css";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1f4efe",
          borderRadius: 8,
        },
      }}
    >
      <AntdApp>
        <App />
      </AntdApp>
    </ConfigProvider>
  </React.StrictMode>
);
