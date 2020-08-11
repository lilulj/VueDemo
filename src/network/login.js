import { request } from './request';
export function getCode(phone) {
	return request({
		url: '/user/user/getLoginCode',
		params: {
			phone
		}
	})
}
export function getLoginPwd(phone, password) {
	return request({
		method: 'post',
		url: '/login/user/password',
		data: {
			phone,
			password
		}
	})
}
export function getLoginPhone(phone, authCode) {
	return request({
		method: 'post',
		url: '/user/user/loginCode',
		data: {
			phone,	
			authCode
		}
	})
}