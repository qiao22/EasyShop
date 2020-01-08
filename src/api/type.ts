import request from "../utils/request";

// 获取分类初始化信息
export function getType() {
    return request({
      url: '/catalog/index',
      method: 'get'
    })
}