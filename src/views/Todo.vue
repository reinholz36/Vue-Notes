<template>
	<div class="home">
		<v-list
			class="pt-0"
			flat
		>
		<div
			v-for="task in tasks"
			:key="task.id">
			<v-list-item
			@click="doneTask(task.id)"
			:class="{'green lighten-4' : task.done}"
			>
				<template v-slot:default>
				<v-list-item-action>
					<v-checkbox
					:input-value="task.done"
					color="primary"
					></v-checkbox>
				</v-list-item-action>

				<v-list-item-content>
					<v-list-item-title> {{ task.title }} </v-list-item-title>
				</v-list-item-content>
				</template>

			</v-list-item>
			<v-divider></v-divider>
		</div>
		</v-list>
	</div>
</template>

<script>

	export default {
		name: 'Todo',
		data() {
			return {
				tasks: [
					{
						id: 1,
						title: 'Coffee ☕️',
						done: false,
					},
					{
						id: 2,
						title: 'Attend to Slack messages',
						done: false,
					},
					{
						id: 3,
						title: 'Attend to All not-yet-merged PRs',
						done: false,
					},
				]
			}
		},
		methods: {
		doneTask(id) {
			let task = this.tasks.filter(task => task.id === id)[0]
			task.done = !task.done
		}
		}
	}

</script>
