import { getHome } from '../api/home'
import { observable, action } from 'mobx'


export default class UserStore {
    @observable
    banner:[] = []

    @observable
    nav:[] = []

    @observable
    brandlist:[] = []

    @observable
    newlist:[] = []

    @observable
    hotlist:[] = []

    @observable
    speciallist:[] = []

    @observable
    categorylist:[] = []
    


    @action
    async setHome(){
        let res = await getHome()
        this.banner = res.data.banner
        this.nav = res.data.channel
        this.brandlist = res.data.brandList
        this.newlist = res.data.newGoodsList
        this.hotlist = res.data.hotGoodsList
        this.speciallist = res.data.topicList
        this.categorylist = res.data.categoryList
    }
}