import { getType } from '../api/type';
import { observable, action } from 'mobx';


export default class UserStore {
    @observable
    typenavlist:any = []

    @action
    async setType(){
        let res = await getType()
        this.typenavlist = res.data.categoryList
        console.log(res.data.categoryList)
    }
}