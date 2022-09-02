<template>
	<div class="home">
		<field-add-task />
			<list-tasks
				v-if="$store.state.tasks.length"
			/>
		<div
			v-else
			class="no-tasks"
		>
		    <v-icon
				size="6rem"
				color="primary"
			>
				mdi-check
			</v-icon>
			<div class="text-h5 primary--text">
				No Notes
			</div>
		</div>
	</div>
</template>

<script>
import ListTasksVue from '@/components/Todo/ListTasks.vue'
import FieldAddTask from "../components/Todo/FieldAddTask.vue"

export default {

		name: 'Todo',

		components: {
			'field-add-task': FieldAddTask,
			'list-tasks': ListTasksVue
		},
	}
</script>

<style lang="sass">
	.no-tasks
		position: absolute
		left: 50%
		top: 50%
		transform: translate(-50%, -50%)
		opacity: 0.5
</style>
