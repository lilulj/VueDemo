import { request } from './request';
export function getCode(phone) {
  return request({
    url: '/user/getRegisterCode',
    params: {
      phone
    }
  })
}
export function getRegister(username, password) {
  return request({
    method: 'post',
    url: '/user/registerUser',
    data: {
      username,
      password
    }
  })
}
export function getRegisterPhone(phone, authCode) {
  return request({
    method: 'post',
    url: '/user/registerCode',
    data: {
      phone,
      authCode
    }
  })
}