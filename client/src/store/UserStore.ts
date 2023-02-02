import { makeAutoObservable } from "mobx";

export default class UserStore {
  private _isAuth: boolean;
  private _user: {};

  constructor() {
    this._isAuth = true;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(isAuth: boolean) {
    this._isAuth = isAuth;
  }

  setUser(user: UserStore) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
