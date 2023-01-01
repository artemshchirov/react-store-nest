import React, { FC } from 'react';
import styles from './Shop.module.scss';

interface ShopProps {}

export const Shop: FC<ShopProps> = () => {
  return (
    <div className={styles.shop} data-testid="Shop">
      Shop
    </div>
  );
};
