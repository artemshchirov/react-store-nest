import React, { useContext } from "react";
import styles from "./BrandBar.module.scss";
import { DeviceContext } from "../../context/DeviceContext";
import { IDevice } from "../../store/DeviceStore";
import { observer } from "mobx-react";

interface IBrandListProps {
  brands: IDevice[];
}

interface IBrandItemProps {
  children: React.ReactNode;
}

const BrandItem: React.FC<IBrandItemProps> = ({ children }) => {
  return <div className={styles.brand__item}>{children}</div>;
};

const BrandList: React.FC<IBrandListProps> = ({ brands }) => {
  return (
    <div className={styles.brand__list}>
      {brands.map(brand => (
        <BrandItem key={brand.id}>{brand.name}</BrandItem>
      ))}
    </div>
  );
};

export const BrandBar: React.FC = observer(() => {
  const { device } = useContext(DeviceContext);
  return (
    <div className={styles.brand}>
      <BrandList brands={device.brands} />
    </div>
  );
});
