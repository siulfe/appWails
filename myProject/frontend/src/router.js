import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode:"history",	
	base: process.env.BASE_URL,
	routes:[
		{
			path:"/",
			name:"index",
			component:() => import("./components/index.vue")
		},
		{
			path:"/prueba",
			name:"prueba",
			component:() => import("./components/CPUUSAGE.vue")
		}
	]
})