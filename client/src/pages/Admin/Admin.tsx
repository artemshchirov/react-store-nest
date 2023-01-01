import React, { FC } from 'react';
import styles from './Admin.module.scss';

interface AdminProps {}

export const Admin: FC<AdminProps> = () => {
  return (
    <div className={styles.admin} data-testid="Admin">
      Admin
    </div>
  );
};
