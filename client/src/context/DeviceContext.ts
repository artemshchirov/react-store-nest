import { createContext } from "react";
import DeviceStore from "../store/DeviceStore";

export interface IDeviceContext {
  device: DeviceStore;
}

const defaultDevice = {
  device: new DeviceStore()
}

export const DeviceContext = createContext<IDeviceContext>(defaultDevice);
