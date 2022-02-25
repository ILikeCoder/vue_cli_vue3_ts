import { createApp } from 'vue'
import globalRegister from './global'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import store from './store'
//1. use 按需注册element plus 组件
//4. use 注册vue-router
//2. use 注册vuex插件
//5. mount 挂载#app
createApp(App).use(globalRegister).use(router).use(store).mount('#app')
