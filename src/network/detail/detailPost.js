import { request } from '../request';
//获取主页公司部分信息
export function getPostDetailList(id) {
    return request({
        url: '/enterprise/recruit/RecDetail',
        params: {
            id
        }
    })
}