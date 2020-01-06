// import React from 'react';
import { login } from '../api/login';
import { observable, action } from 'mobx';


export default class UserStore {
    @observable
    token: string = ''
    
    @action
    async userLogin(form:Object){
        const res = await login(form)
        console.log(res)
    }
}