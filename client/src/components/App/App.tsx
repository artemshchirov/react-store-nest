import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, AppRouter } from "..";
import styles from "./App.module.scss";

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </div>
  );
};
