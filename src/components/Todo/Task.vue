<template>
  <div>
	<v-list-item
	@click="$store.commit('doneTask', task.id)"
	:class="{'green lighten-5' : task.done}"
	>
		<template v-slot:default>
		<v-list-item-action>
			<v-checkbox
			:input-value="task.done"
			color="primary"
			></v-checkbox>
		</v-list-item-action>

		<v-list-item-content>
			<v-list-item-title
			:class="{'text-decoration-line-through' : task.done}"
			> {{ task.title }} </v-list-item-title>
		</v-list-item-content>

		<v-list-item-action>
			<task-menu />
		</v-list-item-action>
		</template>

	</v-list-item>
	<v-divider></v-divider>
	<dialog-delete
	v-if="dialogs.delete"
	@no-selected-in-delete-dialog="dialogs.delete = false"
	:task="task"
	/>
	</div>
</template>

<script>
import DialogDeleteVue from '@/components/Todo/Dialogs/DialogDelete.vue'
import TaskMenuVue from '@/components/Todo/TaskMenu.vue'
export default {
	props: ['task'],
	data() {
		return {
			dialogs: {
				delete: false
			}
		}
	},
	components: {
		'dialog-delete': DialogDeleteVue,
		'task-menu': TaskMenuVue
	}
}
</script>

