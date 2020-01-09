import request from "../utils/request";

// 获取分类初始化信息
export function getType() {
  return request({
    url: '/catalog/index',
    method: 'get'
  })
}

// 获取选中的分类信息
export function getCurrentType(id:number) {
  return request({
    url: '/catalog/current?id='+id ,
    method: 'get'
  })
}