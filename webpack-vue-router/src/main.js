import Vue from 'vue'
//导入vue-router 包
import VueRouter from 'vue-router'
//手动安装VueRouter
Vue.use(VueRouter)

//导入app组件
import app from './App.vue'
//导入登入组件
import login from './main/login.vue'
import register from './main/register.vue'

//创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/login', component: login },
        { path: '/register', component: register }
    ]
})

var vm = new Vue({
    el: "#app",
    render: c => c(app),   //render 会把el指定容器中所有的内容都清空覆盖, 所以不能把路由router-view和router-link直接写到el上
    router, //将路由挂载到 vm 上
})

// 注意: App 这个组件, 是通过vm实例中render函数渲染出来的, render如果要渲染组件,那么渲染出来的组件, 只能放在 el指定的容器中
// login 和 register组件, 是通过 路由匹配监听到的, 所以这两个组件,只能展示在属于路由的<router-view></router-view> 中去；