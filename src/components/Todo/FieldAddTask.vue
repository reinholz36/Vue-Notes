<template>
	<v-text-field
		v-model="newTaskTitle"
		class="pa-3"
		outlined
		label="Add To List"
		@keyup.enter="addTask"
		hide-details
		clearable
	>
		<template v-slot:append>
			<v-icon
			color="primary"
			@click="addTask"
			:disabled="newTaskTitleInvalid"
			>
				mdi-plus
			</v-icon>
        </template>
	</v-text-field>
</template>

<script>

export default {
	data() {
			return {
				newTaskTitle: ''
			}
		},
		computed: {
			newTaskTitleInvalid() {
				return !this.newTaskTitle
			}
		},
		methods: {
			addTask(){
				if (!this.newTaskTitleInvalid) {
					this.$store.dispatch('addTask', this.newTaskTitle)
					this.newTaskTitle = ''
				}
			},
		}
}
</script>

