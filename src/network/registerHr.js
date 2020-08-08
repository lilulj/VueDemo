import { requestL, request, requestLJQ } from "./request";

// 企业注册
export function registerRecruiter(formData) {
  return requestLJQ({
    url: "/enterprise/hr/updateByHrDto",
    method: "post",
    headers: {
      "Content-Type": "application/from-data",
    },
    data: formData,
  });
}
//招聘职位填写
export function registerPost(form) {
  return requestLJQ({
    url: "/enterprise/recruit/insertByRecVo",
    method: "post",
    data: {
      recType: form.recruitType,
      recTitle: form.recruiterPostName,
      workCity: form.recruiterWorkCity, //form.file
      workAddr: form.recruiterWorkPlace,
      workExp: form.recruitJobEx,
      workDip: form.education,
      workSalary: form.salaryRange,
      workDesc: form.jobDescription,
      hrId: form.hrId,
    },
  });
}
