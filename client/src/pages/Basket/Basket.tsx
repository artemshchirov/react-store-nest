import React, { FC } from 'react';
import styles from './Basket.module.scss';

interface Basket {}

export const Basket: FC<Basket> = () => (
  <div className={styles.basket} data-testid="Basket">
    Basket
  </div>
);
