import React, { FC } from "react";
import styles from "./Auth.module.scss";
import Input from "../../components/ui/Input";

export interface AuthProps {}

export const Auth: FC<AuthProps> = () => {
  return (
    <div className={styles.auth} data-testid="Auth">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
};
