// import React from 'react';
import { home } from '../api/home';
import {observable,action} from 'mobx'

export default class HomeStore {
    @observable
    
    @action 
    async homeList(){
        const res:any = await home()
        return res
    }
   
}