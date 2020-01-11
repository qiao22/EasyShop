import request from "../utils/request"
import { AxiosPromise } from "axios"

// 获取专题列表
export function getSpecialList(page:string, size:string):AxiosPromise {
    return request({
        url:'/topic/list',
        method:'get',
        params:{page, size}
    })
}