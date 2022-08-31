<template>
	<v-text-field
		v-model="newTaskTitle"
		class="pa-3"
		outlined
		label="Add To List"
		append-icon="mdi-plus"
		@click:append="addTask"
		@keyup.enter="addTask"
		hide-details
		clearable
	>
	</v-text-field>
</template>

<script>

export default {
	data() {
			return {
				newTaskTitle: ''
			}
		},
		methods: {
			addTask(){
				this.$store.commit('addTask', this.newTaskTitle)
				this.newTaskTitle = ''
			},
		}
}
</script>

<style>

</style>
