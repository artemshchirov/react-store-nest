import React from 'react';
import styles from './Header.module.scss';
import { Navbar, Button } from '../ui';

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.header} data-testid="Header">
      <Navbar />
      <Button typeButton="button" isDisabled>
        Send
      </Button>
    </header>
  );
};
