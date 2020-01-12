import { observable, action } from 'mobx'
import { login } from '../api/login'



export default class UserStore {
    @observable
    token: string = ''
    
    @action
    async userLogin(form:Object){
        const res:any = await login(form)
        if(res.errno === 0) {
            this.token = res.data.sessionKey
            window.localStorage.setItem('user',res.data.mobile)
            window.sessionStorage.setItem('token',res.data.sessionKey)
        }
        return res
    }
}