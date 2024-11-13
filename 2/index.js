// Question 2
// 有一个 http service, 接收 POST 请求
// , Request & Response 的 ContentType 均为 `application/json`
// , 请求成功时, service 返回结构为 `{ code: number, data: any }`, 其中 code = 200
// , 请求失败时, service 返回结构为 `{ code: number, message: string }`
// , 请用 fetch 简单封装一个适配该 http service 的 post 函数
// , 以一致地处理成功返回和常见 HTTP 状态码异常

// 提示: 客户端需要考虑请求不一定能到达 http service 的情况

/**
 * @param {string} api service api 地址
 * @param {any} data 请求内容
 */
async function post(api, data) {
    try {
        const response = await fetch(api,{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        })
        const res=await response.json()
        if(response.ok){
            return {
                code:200,
                data:res
            }
        }else{
            return {
                code: response.status,
                message:res
            }
        }
    }catch(err){
        return {
            message:`request failed ${err}`
        }
    }
}
// http://localhost:111 错误地址，无法到达 http service
post('http://localhost:111').then(res=>{
    console.log(res);
})
post('http://localhost:3000/success').then(res=>{
    console.log(res);
})
post('http://localhost:3000/fail').then(res=>{
    console.log(res);
})
