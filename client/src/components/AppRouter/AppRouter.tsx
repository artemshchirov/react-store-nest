import React from 'react';
import styles from './AppRouter.module.scss';

interface AppRouterProps {}

export const AppRouter = ({}: AppRouterProps) => (
  <div className={styles.appRouter} data-testid="AppRouter">
    AppRouter
  </div>
);
