import React from "react";
import styles from "./Shop.module.scss";
import { TypeBar } from "../../components";
import BrandBar from "../../components/BrandBar";
import Devices from "../../components/Devices";

export interface ShopProps {}

export const Shop: React.FC<ShopProps> = () => {
  return (
    <main className={styles.shop}>
      <TypeBar />
      <section className={styles.shop__products}>
        <BrandBar />
        <Devices />
      </section>
    </main>
  );
};
