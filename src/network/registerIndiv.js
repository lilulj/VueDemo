//个人用户
import { requestL, request, requestLJQ } from "./request";

// 个人用户基本信息
export function postCode(formData) {
  return requestL({
    url: "/resume/addRsume",
    method: "post",
    headers: {
      "Content-Type": "application/from-data",
    },
    data: formData,
  });
}
// 实习经历
export function postCodeCom(formData) {
  return requestL({
    url: "/resume/addRsume",
    method: "post",
    headers: {
      "Content-Type": "application/from-data",
    },
    data: formData,
  });
}
// 学历信息
export function postCodeL(formData) {
  return requestL({
    url: "/resume/addRsume",
    method: "post",
    headers: {
      "Content-Type": "application/from-data",
    },
    data: formData,
  });
}
// 期望职位表单
export function postCodeHope(formData) {
  return requestL({
    url: "/resume/addRsume",
    method: "post",
    headers: {
      "Content-Type": "application/from-data",
    },
    data: formData,
  });
}
// 获取3级地址
export function getPlace() {
  return requestLJQ({
    url: "/city/all",
  });
}
