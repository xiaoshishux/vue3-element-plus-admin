import instance from "@/utils/request" //引入拦截器

/**
 * 获取验证码
 */

export function GetCode(data) {
    return instance.request({
        method: "post",
        url: "/getCode/",
        data //这里是ES6的语法，等价于 data：data
    })
}