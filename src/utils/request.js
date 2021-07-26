/**
 * 请求模块   基于axios 封装的请求模块
 */
import axios from "axios"

//创建一个axios实例，就是复制了一个axios
//我们通过这个实例发送请求，把需要的配置配置给这个实例来
const request = axios.create({
    //baseURL: 'http://ttapi.research.itcast.cn' // 请求的基础路径
    baseURL: 'http://ttapi.research.itcast.cn'
})



//请求拦截器
request.interceptors.request.use(
    //所有的请求都会经过这里
    function (config) {  //config是当前请求相关的配置信息对象    config是可以修改的
        const user = JSON.parse(window.localStorage.getItem('user'))
        console.log(config + '请求成功')
        //允许请求出去之前，定制统一的业务功能处理

        //如果有登录用户信息  设置统一的token
        if (user) {
            config.headers.Authorization = `Bearer ${user.token}`
        }

        return config; //return之后才可以把请求发送出去
    },
    //请求失败，会经过这里
    function (error) {
        console.log('失败了')
        return Promise.reject(error);
    });

//相应拦截器
axios.interceptors.response.use(
    function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    });

//导出请求方法
export default request


//谁要使用，谁就加载这个request这个模块
