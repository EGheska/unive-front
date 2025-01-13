import {makeAutoObservable} from 'mobx';

class UserStore {
    constructor() {
        this._isAuth = true;
        this._isUser = false
        this._isEmployee = true;
        makeAutoObservable(this)
    }

    get isAuth(){
        return this._isAuth;
    }
    get isUser(){
        return this._isUser;
    }
    get isEmployee(){
        return this._isEmployee
    }

    setUser(state){
        this._isUser = state
        this._isAuth = state
    }
    setEmployee(state){
        this._isEmployee = state;
        this._isAuth = state;
    }
}

export default UserStore;
