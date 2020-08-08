import { request } from './request';
export function getCode(phone) {
	return request({
		baseURL: "http://192.168.0.117:10086",
		url: '/user/getLoginCode',
		params: {
			phone
		}
	})
}
export function getLoginPwd(phone, password) {
	return request({
		method: 'post',
		url: '/login/password',
		data: {
			phone,
			password
		}
	})
}
export function getLoginPhone(phone, authCode) {
	return request({
		method: 'post',
		baseURL: "http://192.168.0.117:10086",
		url: '/user/loginCode',
		data: {
			phone,	
			authCode
		}
	})
}