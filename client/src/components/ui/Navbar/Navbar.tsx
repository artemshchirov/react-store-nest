import React, { useContext } from "react";
import styles from "./Navbar.module.scss";
import { UserContext } from "../../../context/UserContext";
import Button from "../Button";
import { observer } from "mobx-react-lite";
export interface NavbarProps {}

export const Navbar = observer(({}: NavbarProps) => {
  const { user } = useContext(UserContext);

  return (
    <nav className={styles.navbar} data-testid="Navbar">
      {user?.isAuth ? (
        <>
          <Button typeButton="button">Admin</Button>
          <Button typeButton="button" onClick={() => user.setIsAuth(false)}>
            Logout
          </Button>
        </>
      ) : (
        <Button typeButton="button" onClick={() => user.setIsAuth(true)}>
          Register
        </Button>
      )}
    </nav>
  );
});
