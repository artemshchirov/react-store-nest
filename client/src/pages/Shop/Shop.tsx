import React, { FC } from 'react';
import styles from './Shop.module.scss';

interface Shop {}

export const Shop: FC<Shop> = () => (
  <div className={styles.shop} data-testid="Shop">
    Shop
  </div>
);
