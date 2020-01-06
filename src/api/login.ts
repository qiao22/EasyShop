import request from '../utils/request';

// 用户登录接口
export function login(data:Object) {
    return request({
      url: '/auth/loginByMobile',
      method: 'post',
      data
    })
}