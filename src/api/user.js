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
        data: data
    })

}
//获取用户信息
export const getUserProfile = () => {
    return request({
        methods:'GET',
        url: '/mp/v1_0/user/profile',
        Headers:{
            Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTg5MDkxMjYsInVzZXJfaWQiOjEsInJlZnJlc2giOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZX0.EdKErKDqMc3snkYxqt02jSa8t9G44002yWKY3CMOMJg'
        }

    })

}


//修改用户信息
