import {makeAutoObservable} from 'mobx';

class UserStore {

    constructor() {
        this._isAuth = false
        this._isUser = false
        this._isEmployee = false
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
        this._isAuth = state || this._isEmployee
    };
    setEmployee(state){
        this._isEmployee = state;
        this._isAuth = state || this._isEmployee
    };

    resetAuth() {
        this._isUser = false;
        this._isEmployee = false;
        this._isAuth = false;
    }
}

const userStore = new UserStore();
export default userStore;
