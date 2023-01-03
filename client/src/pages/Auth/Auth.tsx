import React, { FC } from "react";
import styles from "./Auth.module.scss";

export interface AuthProps {}

export const Auth: FC<AuthProps> = () => {
  return (
    <div className={styles.auth} data-testid="Auth">
      Auth
    </div>
  );
};
