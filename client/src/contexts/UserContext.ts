import { createContext } from "react";
import UserStore from "../store/UserStore";

export interface IUserContext {
  user?: UserStore;
}
export const UserContext = createContext<IUserContext>({});
