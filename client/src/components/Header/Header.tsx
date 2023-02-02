import React from "react";
import Logo from "../Logo";
import { NavBar } from "../ui";
import { CustomLink } from "../CustomLink/CustomLink";
import { SHOP_ROUTE } from "../../utils/constants";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header} data-testid="Header">
      <CustomLink href={SHOP_ROUTE}>
        <Logo />
      </CustomLink>
      <NavBar />
    </header>
  );
};
