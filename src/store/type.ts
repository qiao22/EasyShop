import { getType, getCurrentType } from '../api/type';
import { observable, action } from 'mobx';


export default class UserStore {
    @observable
    typenavlist:any = []
    
    @observable
    currentindex:number = 0

    @observable
    currentdata:any = {}

    @action
    async setType(){
        let res = await getType()
        this.typenavlist = res.data.categoryList
        this.currentdata = res.data.currentCategory
        console.log(res.data.categoryList)
    }

    @action
    async setCurrentType(index:number){
        this.currentindex = index
        let res = await getCurrentType(this.typenavlist[index].id)
        this.currentdata = res.data.currentCategory
        console.log(res.data.currentCategory.subCategoryList)
    }
}