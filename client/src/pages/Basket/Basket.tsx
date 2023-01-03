import React, { FC } from "react";
import styles from "./Basket.module.scss";

export interface BasketProps {}

export const Basket: FC<BasketProps> = () => {
  return (
    <div className={styles.basket} data-testid="Basket">
      Basket
    </div>
  );
};
