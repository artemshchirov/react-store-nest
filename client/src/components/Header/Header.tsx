import React from "react";
import styles from "./Header.module.scss";
import { Navbar, Button } from "../ui";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/constants";

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.header} data-testid="Header">
      <NavLink to={SHOP_ROUTE}>
        <Logo />
      </NavLink>
      <Navbar />
    </header>
  );
};
