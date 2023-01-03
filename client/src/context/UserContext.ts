import { createContext } from "react";
import UserStore from "../store/UserStore";

export interface IUserContext {
  user: UserStore;
}

const defaultUser = {
  user: new UserStore(),
}

export const UserContext = createContext<IUserContext>(defaultUser)
