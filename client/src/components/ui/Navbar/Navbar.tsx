import React, { useContext } from "react";
import styles from "./Navbar.module.scss";
import { UserContext } from "../../../contexts/UserContext";

export interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const { user } = useContext(UserContext);
  return (
    <nav className={styles.navbar} data-testid="Navbar">
      {/* {user?.isAuth ? } */}
    </nav>
  );
};
