import { getSpecialList } from '../api/special';
import { observable, action } from 'mobx'

export default class UserStore {
    @observable
    speciallist:[] = []

    @action
    async setSpecialList(page:string,size:string){
        let res = await getSpecialList(page,size)
        this.speciallist = res.data.data
        console.log(res.data.data)
    }
}