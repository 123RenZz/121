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


//相应拦截器

//导出请求方法
export default request


//谁要使用，谁就加载这个request这个模块
