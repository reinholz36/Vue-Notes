<template>
	<v-dialog
		:value="true"
		persistent
		max-width="290"
		>
		<v-card>
			<v-card-title class="text-h5">
			Edit Note
			</v-card-title>
			<v-card-text>
				Edit the title of this note:
				<v-text-field
				v-model="taskTitle"
				@keyup.enter="saveTask"
				/>
			</v-card-text>
			<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn
				@click="$emit('close')"
				text
			>
				Cancel
			</v-btn>
			<v-btn
				@click="saveTask"
				color="red darken-1"
				text
			>
				Save
			</v-btn>
			</v-card-actions>
		</v-card>
		</v-dialog>
</template>

<script>
export default {
	props: ['task'],
	data() {
		return {
			taskTitle: null
		}
	},
	mounted() {
		this.taskTitle = this.task.title
	},
	methods: {
		saveTask() {
			let payload = {
				id: this.task.id,
				title: this.taskTitle,
			}
			this.$store.commit('updateTask', payload)
			this.$emit('close')
		},
	},
}
</script>

<style>

</style>
