import { makeAutoObservable } from 'mobx';

export default class UserStore {

  private _isAuth: boolean
  private _user: {}

  constructor() {
    this._isAuth = false
    this._user = {}
    makeAutoObservable(this)
  }

  setIsAuth(isAuth: boolean): void {
    this._isAuth = isAuth
  }

  //TODO: change any
  setUser(user: UserStore) {
    this._user = user;
  }

  get isAuth() {
    return this._user;
  }


}