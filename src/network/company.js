import { request } from './request';
export function getfindRecByFunnel(funnelEntDto) {
    return request({
        method: "post",
        url: '/enterprise/enterprise/findRecByFunnel',
        data: {
            entAddr: funnelEntDto.entAddr,//公司地址
            entJobName: funnelEntDto.entJobName,//公司名
            entStageScale: funnelEntDto.entStageScale,//
            entStageFinace: funnelEntDto.entStageFinace,
            jobName: funnelEntDto.jobName,
            workCity: funnelEntDto.workCity, 
            page: funnelEntDto.page,
            pageSize: funnelEntDto.pageSize
        }
    })
}
