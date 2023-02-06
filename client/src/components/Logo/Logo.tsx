import React from "react";
import styles from "./Logo.module.scss";

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo} data-testid="Logo">
      Logo
    </div>
  );
};
