import React from "react";
import styles from "./Footer.module.scss";

export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <div className={styles.footer} data-testid="Footer">
      Footer
    </div>
  );
};
