import React, { useContext } from "react";
import styles from "./TypeBar.module.scss";
import { observer } from "mobx-react-lite";
import { DeviceContext } from "../../context/DeviceContext";
import { IDevice } from "../../store/DeviceStore";

export interface ITypeItemProps {
  children: React.ReactNode;
}

export const TypeItem: React.FC<ITypeItemProps> = ({ children }) => {
  return <li className={styles.type__item}>{children}</li>;
};

export interface ITypeListProps {
  types: IDevice[];
}

export const TypeList: React.FC<ITypeListProps> = ({ types }) => {
  return (
    <div className={styles.type__list}>
      {types.map(type => (
        <TypeItem key={type.id}>{type.name}</TypeItem>
      ))}
    </div>
  );
};

export const TypeBar: React.FC = observer(() => {
  const { device } = useContext(DeviceContext);
  return (
    <nav className={styles.type}>
      <TypeList types={device.types} />
    </nav>
  );
});
