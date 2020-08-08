import { request } from './request';
export function getCity() {
  return request({
    url: '/city/city/all',
  })
}
//获取全部职业分类数据
export function getJobClassity() {
  return request({
    url: '/job/job/all',
  })
}
//获取主页公司招聘信息
export function getRecruit() {
  return request({
    url: '/enterprise/recruit/findHotRec',
    params:{
      length:9
    }
  })
}
//获取主页公司部分信息
export function getFindHotEnt() {
  return request({
    url: '/enterprise/enterprise/findHotEnt',
    params:{
      length:8
    }
  })
}