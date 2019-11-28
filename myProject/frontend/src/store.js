import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		count: 10
	},
	mutations:{
		incrementCounter(state, payload) {
	    	state.count += payload
	  	}
	},
	actions: {
	    incrementAction (context, payload) {
	      context.commit('incrementCounter', payload)
    	}
	},
	getters: {
	    counter (state) {
	      return state.count
	    }
	}
})