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
				<v-text-field />
			</v-card-text>
			<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn
				@click="$emit('no-selected-in-delete-dialog')"
				text
			>
				Cancel
			</v-btn>
			<v-btn
				@click="$store.dispatch('deleteTask', task.id)"
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
}
</script>

<style>

</style>
