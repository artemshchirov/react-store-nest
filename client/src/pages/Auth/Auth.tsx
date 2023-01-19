import React, { FC } from "react";
import styles from "./Auth.module.scss";
import FormField from "../../components/ui/FormField";

export interface AuthProps {}

export const Auth: FC<AuthProps> = () => {
  return (
    <div className={styles.auth} data-testid="Auth">
      <FormField type="text" />
    </div>
  );
};
