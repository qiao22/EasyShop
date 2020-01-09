import request from '../utils/request';

export let home = ()=>{
    return request.get('/')
}