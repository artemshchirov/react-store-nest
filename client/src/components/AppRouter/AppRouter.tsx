import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../../routes';
import { UserContext } from '../../main';

export const AppRouter = () => {
  const { user } = useContext(UserContext);
  console.log(user)
  return (
    <Routes>
      {user?.isAuth
        ? authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))
        : null}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
