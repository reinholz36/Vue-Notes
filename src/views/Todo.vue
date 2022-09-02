<template>
	<div class="home">
		<field-add-task />
			<list-tasks
				v-if="$store.state.tasks.length"
			/>
		<no-tasks
			v-else
			class="no-tasks"
		/>
	</div>
</template>

<script>
import ListTasksVue from '@/components/Todo/ListTasks.vue'
import FieldAddTask from "../components/Todo/FieldAddTask.vue"
import NoTasks from '@/components/Todo/NoTasks.vue'

export default {

		name: 'Todo',

		components: {
			'field-add-task': FieldAddTask,
			'list-tasks': ListTasksVue,
			'no-tasks': NoTasks
		},
	}
</script>


