/**
 * 用户相关请求模块
 * 
 */
import request from "@/utils/request";
//用户登录
export const login = data => {
    return request({
        methods: "POST",
        url: "/mp/v1_0/authorizations",
        //data 用来设置post 请求体
       // data: this.user
       data:data
    })

}
//获取用户信息



//修改用户信息
