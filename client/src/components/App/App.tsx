import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, AppRouter } from "..";
import "./App.scss";

export const App: FC = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
};
