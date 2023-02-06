import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes";
import { UserContext } from "../../context/UserContext";
import { observer } from "mobx-react";

export const AppRouter: React.FC = observer(() => {
  const { user } = useContext(UserContext);
  return (
    <Routes>
      {user?.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
});
