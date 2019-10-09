/*
 * @Date: 2019-10-09 11:45:17
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-09 16:18:32
 * @Desc: 
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/style/common.css";
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
