import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.scss';
import UserStore from './store/UserStore';

interface IUserContext {
  user?: UserStore;
}

export const UserContext = createContext<IUserContext>({});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContext.Provider
      value={{
        user: new UserStore(),
      }}
    >
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
);
