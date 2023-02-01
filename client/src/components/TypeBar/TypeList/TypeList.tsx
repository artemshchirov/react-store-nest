import React from "react";
import styles from "./TypeList.module.scss";
import { Device } from "../../../store/DeviceStore";
import { TypeItem } from "../TypeItem/TypeItem";

export interface ITypeListProps {
  types: IDevice[];
}

export const TypeList = ({ types }: ITypeListProps) => {
  return (
    <div className={styles.typeList}>
      {types.map(type => (
        <TypeItem key={type.id}>{type.name}</TypeItem>
      ))}
    </div>
  );
};
