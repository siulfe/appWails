import 'babel-polyfill';
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import Vuex from 'vuex'
import VueToastr2 from 'vue-toastr-2'
import VueRouter from 'vue-router'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'

import en_es from './assets/js/diccionario/en-ES'
import es_ve from './assets/js/diccionario/es-VE'
import { store } from './store.js'
import router from './router.js'
 
 
Vue.config.productionTip = false;
Vue.config.devtools = true;

window.toastr = require('toastr')

Vue.use(Vuetify)
Vue.use(VueI18n)
Vue.use(Vuex)
Vue.use(VueToastr2)
Vue.use(VueRouter)

import * as Wails from '@wailsapp/runtime';


const i18n = new VueI18n({
	locale: "es-VE",
	messages:{
		'es-VE':en_es,
		'en-ES':es_ve
	}
})


Wails.Init(() => {
	new Vue({
		i18n,
		store: store,
		router,
		vuetify: new Vuetify({
			lang:(key,...params) => i18n.t(key,params)
		}),
		render: h => h(App)
	}).$mount('#app')
})
