// import _ from './debug/backend.js'
// import __ from './debug/hook.js'
// window.__VUE_PROD_DEVTOOLS__ = true
// import { initPlugin } from './debug/vue_plugin.js'
const iframe = document.createElement("iframe");
iframe.id= 'vue-iframe'
iframe.style.height = '600px'
document.body.appendChild(iframe);
import plugin from './debug/vue_plugin.js'
import { createApp } from './debug/vue.esm-bundler.js'
// import Vue from 'vue'
// import Vue from 'vue/dist/vue.global.js'
// const Vue = require('vue/dist/vue.global.js')
import App from './App.vue'
// console.log(_,__)
// debugger
// import Devtools from 'vue-vconsole-devtools'
// Vue.devtools = true;

window.__FEATURE_PROD_DEVTOOLS__ = true
// const devt = {
// 	install(app) {
// 		if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
//       console.log('====================================');
//       console.log(app);
//       window.app = app
//       console.log('====================================');
//       app.config.devtools = true
//       debugger
// 			window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("init",app.constructor)
// 		}
// 	},
// };

// console.log("!!!!!!!!");
// console.log(Vue)
// window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue)
// createApp(App).use(devt).mount('#app')

// 
app['config'] = {devtools: true}
createApp(App).mount('#app')

// setTimeout(() => {
//   if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
//     window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("app:init",app,'xx.xx',"type-m")
// }
// }, 0);

setTimeout(() => {
  plugin.initPlugin(iframe)
})
