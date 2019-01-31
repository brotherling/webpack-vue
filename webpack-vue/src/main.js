
import Vue from 'vue'
import login from './login.vue'

var vm = new Vue ({
    el: "#app",
    data: {
        info: '你好'
    },
    render: c => c(login)
})

import m22, {title as tle, content} from './test.js'
console.log(m22)
console.log(tle+'-----'+content)