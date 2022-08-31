<template>
	<div class="home">
		<field-add-task />
			<v-list
				v-if="$store.state.tasks.length"
				class="pt-0"
				flat
			>
			<div
				v-for="task in $store.state.tasks"
				:key="task.id">
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
						<v-btn
						@click.stop="$store.commit('deleteTask', task.id)"

						icon>
							<v-icon color="primary lighten-1">mdi-trash-can-outline</v-icon>
						</v-btn>
					</v-list-item-action>
					</template>

				</v-list-item>
				<v-divider></v-divider>
			</div>
			</v-list>
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
		import FieldAddTask from "../components/Todo/FieldAddTask.vue"
	export default {
		components: {
			'field-add-task': FieldAddTask
		},
		name: 'Todo',
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
