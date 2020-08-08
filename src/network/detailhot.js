//个人用户
import { requestL, request, requestLJQ } from "./request";

// 个人用户基本信息
export function postCode(formData) {
  return requestL({
    url: "/enterprise/recruit/findRecByFunnel",
    method: "post",
    data: {},
  });
}

// 职位3级选项
export function getJobOptions(formData) {
  return requestL({
    url: "/job/job/all",
    method: "get",
    params: {},
  });
}
