// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import Vuex from 'vuex'
import store from './store/store'
import VueResource from 'vue-resource'
import sessionstorage from 'sessionstorage'
import json from 'JSON'
import "babel-polyfill";

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' });
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(sessionstorage)
Vue.use(json)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render:h=>h(app),
})
