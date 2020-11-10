import axios from "axios"; // vue的http功能
// 参考：https://www.jianshu.com/p/7a9fbcbb1114

axios.defaults.baseURL = 'https://api.apiopen.top';
// axios.defaults.headers['Authorization'] = 'user_token';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加一个请求拦截器
axios.interceptors.request.use(config => {
    // 请求成功
    return config;
}, error => {
    // 请求失败
    return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(response => {
    // 响应成功
    return response;
}, error => {
    // 响应失败
    return Promise.reject(error);
});


export default axios;