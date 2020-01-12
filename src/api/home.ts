import request from '../utils/request'
import { AxiosPromise } from 'axios'

// 首页数据
export function getHome():AxiosPromise {
    return request({
      url: '/',
      method: 'get'
    })
}