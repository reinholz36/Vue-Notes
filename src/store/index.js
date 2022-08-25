import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks: [
			{
				id:1,
				title: "Coffee Time",
				done:false
			}
		]
	},
	getters: {
	},
	mutations: {
	},
	actions: {
	}
})
