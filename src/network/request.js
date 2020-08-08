import axios from "axios";

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    // baseURL: 'http://192.168.0.131:10086',
    baseURL: "http://192.168.0.103:10010",
    timeout: 5000,
  });
  //拦截器
  //请求时拦截
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {}
  );
  //响应时拦截
  instance.interceptors.response.use(
    (config) => {
      return config;
    },
    (err) => {}
  );
  //2.本身就是一个promise 发送网络请求 回调出去 然后外面就能.then .catch 拿到数据了
  return instance(config);
}

export function requestL(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: "http://192.168.0.106:10010",
    // baseURL: "http://192.168.0.172:8500",
    timeout: 5000,
  });
  //拦截器
  //请求时拦截
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {}
  );
  //响应时拦截
  instance.interceptors.response.use(
    (config) => {
      return config;
    },
    (err) => {}
  );
  //2.本身就是一个promise 发送网络请求 回调出去 然后外面就能.then .catch 拿到数据了
  return instance(config);
}

export function requestLJQ(config) {
  //1.创建axios实例
  const instance = axios.create({
    // baseURL: 'http://192.168.0.131:10086',
    baseURL: "http://192.168.0.103:10010",
    timeout: 5000,
  });
  //拦截器
  //请求时拦截
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {}
  );
  //响应时拦截
  instance.interceptors.response.use(
    (config) => {
      return config;
    },
    (err) => {}
  );
  //2.本身就是一个promise 发送网络请求 回调出去 然后外面就能.then .catch 拿到数据了
  return instance(config);
}
