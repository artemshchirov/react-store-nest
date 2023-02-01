import React from "react";
import styles from "./TypeItem.module.scss";

export interface ITypeItemProps {
  children: React.ReactNode;
}

export const TypeItem = ({ children }: ITypeItemProps) => {
  return <li className={styles.typeItem}>{children}</li>;
};
