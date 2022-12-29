import React, { FC } from 'react';
import styles from './Auth.module.scss';

interface Auth {}

export const Auth: FC<Auth> = () => (
  <div className={styles.auth} data-testid="Auth">
    Auth
  </div>
);
