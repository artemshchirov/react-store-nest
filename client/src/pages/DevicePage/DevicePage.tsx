import React, { FC } from "react";
import styles from "./DevicePage.module.scss";

export interface DevicePageProps {}

export const DevicePage: FC<DevicePageProps> = () => {
  return (
    <div className={styles.devicePage} data-testid="DevicePage">
      DevicePage
    </div>
  );
};
