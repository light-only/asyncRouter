import {createRouter,createWebHistory } from 'vue-router';
import Layout from '@/layout'

//静态路由
export const constantRoutes = [
  {
    path: '',//根目录路由为/
    component: Layout,//指定使用Layout组件布局
    redirect: '',//重定向至/home页面
    hidden:true,
    children: [{//子菜单信息
      path: '',//路径
      name: 'home',
      component: () => import('@/views/home'),//指定组件
      meta: { title: '首页', access: 0, affix: true }
    }]
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login')
  }
];

const router =createRouter({
  history:createWebHistory(),
  routes:constantRoutes,
  //使用浏览器的回退或者前进时，重新返回时保留页面滚动位置，跳转页面的话，不触发。
  scrollBehavior(to,from,savePosition){
    if(savePosition){
      return savePosition;
    }else{
      return {top:0};
    }
  }
});

export default router;