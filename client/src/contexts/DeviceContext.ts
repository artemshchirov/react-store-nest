import { createContext } from "react";
import DeviceStore from "../store/DeviceStore";

export interface IDeviceContext {
  device?: DeviceStore;
}

export const DeviceContext = createContext<IDeviceContext>({});
