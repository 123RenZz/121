/**
 * 文章的相关请求模块
 * 
 */
 import request from "@/utils/request"

//获取文章列表信息
export const getArticles = params => {
    return request({
        methods: "GET",
        url: "/mp/v1_0/article",

        //body使用data设置

        //Query参数使用params设置

        //headers参数使用headers设置
        params
      
    })

}