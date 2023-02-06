import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, AppRouter } from "..";
import { observer } from "mobx-react";
import styles from "./App.module.scss";

export const App: React.FC = observer(() => {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </div>
  );
});
