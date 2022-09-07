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
		],
		snackbar: {
			show: false
		}
	},
	getters: {
	},
	mutations: {
		addTask(state, newTaskTitle){
			let newTask = {
				id: Date.now(),
				title: newTaskTitle,
				done:false
			}
			state.tasks.push(newTask)
		},
		doneTask(state, id) {
			let task = state.tasks.filter(task => task.id === id)[0]
			task.done = !task.done
		},
		deleteTask(state, id) {
			state.tasks = state.tasks.filter(task => task.id !== id)
		},
		showSnackbar(state) {
			state.snackbar.show = true
		}
	},
	actions: {
		addTask( { commit }, newTaskTitle) {
			commit('addTask', newTaskTitle)
			commit('showSnackbar')
		}
	}
})
