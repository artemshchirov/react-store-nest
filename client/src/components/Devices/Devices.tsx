import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DeviceContext } from "../../context/DeviceContext";
import { IDevices } from "../../store/DeviceStore";
import styles from "./Devices.module.scss";
import { Icon } from "../ui";
import { DEVICE_ROUTE } from "../../utils/constants";

export interface IDeviceItemProps {
  device: IDevices;
}

export interface IDeviceListProps {
  devices: IDevices[];
}

export const DevicesItem = ({ device }: IDeviceItemProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.device}
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <img src="#" className={styles.device__image}></img>
      <div className={styles.device__info}>
        <div>Apple</div>
        <div className={styles.device__rating}>
          <div>{device.rating}</div>
          <Icon type="Starred" />
        </div>
      </div>
      <div>{device.name}</div>
    </div>
  );
};

export const DevicesList = ({ devices }: IDeviceListProps) => {
  return (
    <div className={styles.devices__list}>
      {devices.map(device => (
        <DevicesItem key={device.id} device={device} />
      ))}
    </div>
  );
};

export const Devices = () => {
  const { device } = useContext(DeviceContext);
  return (
    <div className={styles.devices}>
      <DevicesList devices={device.devices} />
    </div>
  );
};
