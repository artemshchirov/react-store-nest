import React, { useContext } from "react";
import styles from "./TypeBar.module.scss";
import { observer } from "mobx-react-lite";
import { DeviceContext } from "../../context/DeviceContext";
import { TypeList } from "./TypeList/TypeList";

export const TypeBar: React.FC = observer(() => {
  const { device } = useContext(DeviceContext);
  return (
    <nav className={styles.typeBar}>
      <TypeList types={device.types} />
    </nav>
  );
});
