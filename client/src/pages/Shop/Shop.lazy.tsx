import React, { FC } from 'react';
import styles from './Shop.module.scss';

export interface ShopProps {}

export const Shop: FC<ShopProps> = () => (
  <div className={styles.shop} data-testid="Shop">
    Shop
  </div>
);
