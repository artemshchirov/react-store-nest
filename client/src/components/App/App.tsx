import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, AppRouter } from "..";
import styles from "./App.module.scss";

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__container}>
        <Router>
          <Header />
          <AppRouter />
        </Router>
      </div>
    </div>
  );
};
