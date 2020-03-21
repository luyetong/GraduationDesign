import axios from 'axios'
import qs from 'qs'

//请求拦截器
axios.interceptors.request.use(function (config) {
  // console.log(config)
  if (config.method === "post") {
    config.data = qs.stringify(config.data)
  }
  if (localStorage.getItem("token")){
    config.headers.token = localStorage.getItem('token')
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

//响应拦截器
axios.interceptors.response.use(function (response) {
  if (response.data.status == 403) {
    localStorage.removeItem('token')
  }
  if (response.data.token) {
    localStorage.setItem('token', response.data.token)
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios