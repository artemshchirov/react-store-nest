import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DeviceContext } from "../../context/DeviceContext";
import { IDevices } from "../../store/DeviceStore";
import styles from "./Devices.module.scss";
import { Icon } from "../ui";
import { DEVICE_ROUTE } from "../../utils/constants";
import { observer } from "mobx-react";

interface IDeviceItemProps {
  device: IDevices;
}

const DevicesItem: React.FC<IDeviceItemProps> = ({ device }) => {
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

interface IDeviceListProps {
  devices: IDevices[];
}

const DevicesList: React.FC<IDeviceListProps> = ({ devices }) => {
  return (
    <div className={styles.devices__list}>
      {devices.map(device => (
        <DevicesItem key={device.id} device={device} />
      ))}
    </div>
  );
};

export const Devices: React.FC = observer(() => {
  const { device } = useContext(DeviceContext);
  return (
    <div className={styles.devices}>
      <DevicesList devices={device.devices} />
    </div>
  );
});
