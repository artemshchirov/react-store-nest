import React, { useContext } from "react";
import styles from "./BrandBar.module.scss";
import { DeviceContext } from "../../context/DeviceContext";
import { IDevice } from "../../store/DeviceStore";

export interface IBrandListProps {
  brands: IDevice[];
}

export interface IBrandItemProps {
  children: React.ReactNode;
}

export const BrandItem = ({ children }: IBrandItemProps) => {
  return <div className={styles.brand__item}>{children}</div>;
};

export const BrandList = ({ brands }: IBrandListProps) => {
  return (
    <div className={styles.brand__list}>
      {brands.map(brand => (
        <BrandItem key={brand.id}>{brand.name}</BrandItem>
      ))}
    </div>
  );
};

export const BrandBar = () => {
  const { device } = useContext(DeviceContext);
  return (
    <div className={styles.brand}>
      <BrandList brands={device.brands} />
    </div>
  );
};
