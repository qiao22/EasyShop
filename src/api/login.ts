import request from '../utils/request'
import { AxiosPromise } from 'axios'

// 用户登录接口
export function login(data:Object):AxiosPromise {
    return request({
      url: '/auth/loginByMobile',
      method: 'post',
      data
    })
}