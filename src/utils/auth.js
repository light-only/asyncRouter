import Cookies from 'js-cookie'
import {TOKEN_TIME,TOKEN_TIME_VALUE} from "./constants";

const TokenKey = 'Admin-Token'
//获取token
export function getToken() {
  return Cookies.get(TokenKey)
}
//设置token
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
//移除token
export function removeToken() {
  return Cookies.remove(TokenKey)
}

//登录时间设置
export const setTokenTime = ()=>{
  localStorage.setItem(TOKEN_TIME,Date.now());
}
//获取当前时间
export const getTokenTime = ()=>{
  return localStorage.getItem(TOKEN_TIME);
}
//是否过期
export const diffTokenTime = ()=>{
  return  Date.now() - getTokenTime() > TOKEN_TIME_VALUE;
}
