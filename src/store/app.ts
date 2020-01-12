import { observable, action } from "mobx"

export default class UserStore {
    @observable
    loadingflag=false

    @action
    setLoading (flag:boolean):void{
        this.loadingflag = flag
    }
}