import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks: [
			{
				id: 1,
				title: "Coffee Time",
				done:false,
				dueDate: '2022-11-04'
			},
			{
				id: 2,
				title: "Check Dev Enviroment for inevitable meltdown",
				done:false,
				dueDate: null
			},
			{
				id: 3,
				title: "Schedule Pairing and PR-Review",
				done:false,
				dueDate: null
			}
		],
		snackbar: {
			show: false,
			text: ''
		}
	},
	getters: {
	},
	mutations: {
		addTask(state, newTaskTitle){
			let newTask = {
				id: Date.now(),
				title: newTaskTitle,
				done: false,
				dueDate: null,
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
		updateTask(state, payload) {
			let task = state.tasks.filter(task => task.id === payload.id)[0]
			task.title = payload.title
		},
		updateTaskDueDate(state, payload) {
			console.log('edit duedate', payload)
			let task = state.tasks.filter(task => task.id === payload.id)[0]
			task.dueDate = payload.dueDate
			console.log('after editduedate', task.dueDate)
		},
		showSnackbar(state, text) {
			let timeout = 0
			if (state.snackbar.show) {
				state.snackbar.show = false
				timeout = 300
			}
			setTimeout(() => {
				state.snackbar.show = true
				state.snackbar.text = text
			}, timeout)
		},
		hideSnackbar(state) {
			state.snackbar.show = false
		}
	},
	actions: {
		addTask( { commit }, newTaskTitle) {
			commit('addTask', newTaskTitle)
			commit('showSnackbar', 'Note Added!')
		},
		deleteTask( {commit }, id) {
			commit('deleteTask', id)
			commit('showSnackbar', 'Note Deleted!')
		},
		updateTask({ commit }, payload) {
			commit('updateTask', payload)
			commit('showSnackbar', 'Note Updated!')
		},
		updateTaskDueDate({ commit }, payload) {
			commit('updateTaskDueDate', payload)
			commit('showSnackbar', 'Due Date Updated!')
		}
	}
})
