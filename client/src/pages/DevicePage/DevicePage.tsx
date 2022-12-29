import React, { FC } from 'react';
import styles from './DevicePage.module.scss';

interface DevicePage {}

export const DevicePage: FC<DevicePage> = () => (
  <div className={styles.devicePage} data-testid="DevicePage">
    DevicePage
  </div>
);
