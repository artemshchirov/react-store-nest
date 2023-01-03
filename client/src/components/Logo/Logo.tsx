import React from 'react';
import styles from './Logo.module.scss';

export interface LogoProps {}

export const Logo = ({}: LogoProps) => {
  return (
    <div className={styles.logo} data-testid="Logo">
      Logo
    </div>
  );
};
