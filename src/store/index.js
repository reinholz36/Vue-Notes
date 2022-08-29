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
	},
	actions: {
	}
})
