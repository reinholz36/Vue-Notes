<template>
	<v-list
		class="pt-0"
		flat
	>

	<tasks
		v-for="task in $store.getters.tasksFiltered"
		:key="task.id"
		:task="task"
	/>

	</v-list>
</template>

<script>
import Tasks from "@/components/Todo/Task.vue"

export default {
	components: {
		'tasks': Tasks,
	}
}
</script>
