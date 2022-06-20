import {login,getInfo,layout} from "@/api/login";
import { ElMessage } from 'element-plus'
import {getToken, removeToken, setToken,setTokenTime} from '@/utils/auth.js'
import defAve from '@/assets/profile.jpg'
const user = {
    state :{
        token:getToken(),
        name:"",
        avatar:"",
        roles:[],
        permission:[],
        post:''
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token =token;
        },
        SET_NAME:(state,name)=>{
            state.name = name;
        },
        SET_AVATAR:(state,avatar)=>{
            state.avatar = avatar;
        },
        SET_ROLES:(state,roles)=>{
            state.roles = roles;
        },
        SET_PERMISSION:(state,permission)=>{
            state.permission = permission
        },
        SET_USERPOST:(state,post)=>{
            state.post = post;
        }
    },
    actions:{
        //登录
        Login:({commit},userInfo)=>{
            const username =userInfo.username.trim();
            const password = userInfo.password;
            const code =userInfo.code;
            const uuid = userInfo.uuid;
            return new Promise((resolve,reject)=>{
                login(username,password,code,uuid).then(res=>{
                    if(res.code === 200){
                        ElMessage({
                            message: res.msg,
                            type: 'success',
                        });
                        setToken(res.token);
                        setTokenTime();
                        commit('SET_TOKEN',res.token);
                        resolve(res);
                    }else{
                        ElMessage({
                            message: res.msg,
                            type: 'error',
                        });
                    }

                });
            })
        },
        //获取用户信息
        GetInfo:({commit,state})=>{
            return new Promise((resolve,reject)=>{
                getInfo().then(res=>{
                    const user = res.user;
                    const avatar =(user.avatar == "" || user.avatar == null)? defAve : import.meta.env.VITE_APP_BASE_APP + user.avatar;
                    //验证返回的roles是一个非空数组
                    if(res.roles && res.roles.length >0){
                        commit('SET_ROLES',res.roles);
                        commit('SET_PERMISSION',res.permission);
                    }else{
                        commit('SET_ROLES',['ROLE_DEFAULT']);
                    }
                    commit('SET_NAME',user.username);
                    commit('SET_AVATAR',avatar);
                    commit('SET_USERPOST',user.userPost);
                    resolve(res);
                }).catch(err=>{
                    reject(err);
                })
            })
        },
        //退出登录
        LayOut:({commit,state})=>{
            return new Promise((resolve,reject)=>{
                layout(state.token).then(res=>{
                    commit('SET_TOKEN','');
                    localStorage.clear();
                    commit('SET_ROLES',[]);
                    commit('SET_PERMISSION',[]);
                    removeToken();
                    resolve();
                }).catch(error=>{
                    reject(error);
                })
            })
        }
    }
}

export default user;