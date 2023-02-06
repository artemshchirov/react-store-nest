import React, { useContext } from "react";
import styles from "./NavBar.module.scss";
import { UserContext } from "../../../context/UserContext";
import Button from "../Button";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import {
  ADMIN_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
} from "../../../utils/constants";

export const NavBar: React.FC = observer(() => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      {user?.isAuth ? (
        <>
          <Button typeButton="button" onClick={() => navigate(ADMIN_ROUTE)}>
            Admin
          </Button>
          <Button typeButton="button" onClick={() => navigate(SIGNIN_ROUTE)}>
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
