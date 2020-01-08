import { login } from '../api/login';
import { observable, action } from 'mobx';


export default class UserStore {
    @observable
    token: string = ''
    
    @action
    async userLogin(form:Object){
        const res:any = await login(form)
        if(res.errno === 0) {
            this.token = res.data.sessionKey
            window.localStorage.setItem('token',res.data.sessionKey)
        }
        return res
    }
}