import axios from 'axios';
import qs from 'qs'

const axiosInstanse = axios.create({
    baseURL:"http://192.168.1.102:1234"
})

function http(type,url,param=null){
    let res;
    if(type === "get"){
        res = axiosInstanse.get(url,{params: param})
    }else{
        res = axiosInstanse.post(url, qs.stringify(param))
    }
    return res.then(({data})=>data)
}

//用户登录
export const login = data => {return http("post",'/login.php',data)}

//用户注册
export const reg = data => {return http("post","/reg.php",data)}

//获取验证码
export const checkCode = data =>{return http("get","/valitecode.php",data)}

//获取验证码
export const guseeLike = data =>{return http("get","/gethouselist.php",data)}