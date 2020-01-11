import request from "../utils/request";
import { AxiosPromise } from "axios";

// 获取分类初始化信息
export function getType():AxiosPromise {
  return request({
    url: '/catalog/index',
    method: 'get'
  })
}

// 获取选中的分类信息
export function getCurrentType(id:number):AxiosPromise {
  return request({
    url: '/catalog/current?id=' + id ,
    method: 'get'
  })
}