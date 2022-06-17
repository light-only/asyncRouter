
export function login(username,password,code,uuid){
    return new Promise((resolve,reject)=>{
        if(username =='admin' && password && code =='1234' && uuid){
            const data = {
                code:200,
                data:[1,2,3,4],
                token:'12222223djfkajf',
                msg:"请求成功"
            };
            resolve(data);
        }else{
            const data = {
                code:404,
                data:[],
                msg:'账号或密码错误，请重新登录'
            }
            resolve(data);
        }

    })
}

export function getInfo(){
    return new Promise((resolve,reject)=>{
        const data = {
            code:200,
            user:{
                avatar:"",
                username:"admin",
                userPost:"未知字段"
            },
            roles:['admin'],
            permission:['允许操作'],
            msg:"获取用户信息成功"
        }
        resolve(data);
    })
}

export function layout(token){
    return new Promise((resolve,reject)=>{
        if(token){
            resolve()
        }else{
            reject('请求失败')
        }
    })
}