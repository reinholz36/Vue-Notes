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

				<v-list-item-action v-if="task.dueDate">
                <v-list-item-action-text>
					<v-icon small>mdi-calendar</v-icon>
					{{ task.dueDate | niceDate}}
				</v-list-item-action-text>

                </v-list-item-action>

				<v-list-item-action>
					<task-menu
					:task = 'task'
					/>
				</v-list-item-action>
			</template>

		</v-list-item>
		<v-divider></v-divider>
	</div>
</template>

<script>

import TaskMenuVue from '@/components/Todo/TaskMenu.vue'
export default {
	props: ['task'],
	filters: {
		niceDate(value) {
			console.log("🚀 ~ file: Task.vue:49 ~ niceDate ~ value", value)
			const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]
			const dateFormat  = month[value.split("-")[1] - 1] + " " + value.split("-")[2]
			return dateFormat
		}
	},
	components: {
		'task-menu': TaskMenuVue
	}
}
</script>

