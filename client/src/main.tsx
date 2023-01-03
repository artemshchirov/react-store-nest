import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import { UserContext } from "./context/UserContext";
import { DeviceContext } from "./context/DeviceContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContext.Provider value={{ user: new UserStore() }}>
      <DeviceContext.Provider value={{ device: new DeviceStore() }}>
        <App />
      </DeviceContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>
);
