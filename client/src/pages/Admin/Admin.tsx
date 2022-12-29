import React, { FC } from 'react';
import styles from './Admin.module.scss';

interface Admin {}

export const Admin: FC<Admin> = () => (
  <div className={styles.admin} data-testid="Admin">
    Admin
  </div>
);
