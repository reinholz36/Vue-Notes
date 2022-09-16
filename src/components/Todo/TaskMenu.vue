<template>
	<div>
		<v-menu
		bottom
		left
		>
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					color="primary"
					icon
					v-bind="attrs"
					v-on="on"
				>
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</template>

			<v-list
			rounded
			>
				<v-list-item
					v-for="(item, index) in items"
					:key="index"
					@click="handleMenuSelect(index)"
				>
					<v-list-item-icon>
						<v-icon v-text="item.icon"></v-icon>
					</v-list-item-icon>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>

		<dialog-delete
	v-if="dialogs.delete"
	@no-selected-in-delete-dialog="dialogs.delete = false"
	:task="task"
	/>
	</div>
</template>

<script>
import DialogDeleteVue from '@/components/Todo/Dialogs/DialogDelete.vue'
export default {
	props: ['task'],
    data: () => ({

		dialogs: {
			delete: false
		},
		items: [
			{
				title: 'Edit',
				icon: 'mdi-pencil',
				click() {
					console.log('Edit clicked!')
				},
			},
			{
				title: 'Due Date',
				icon: 'mdi-calendar-clock',
				click() {
					console.log('Due Date clicked!')
				},
			},
			{
				title: 'Delete',
				icon: 'mdi-delete',
				click() {
					this.dialogs.delete = true;
				},
			},
		],
    }),
	methods: {
		handleMenuSelect(index){
			this.items[index].click.call(this);
		}
	},
	components: {
		'dialog-delete': DialogDeleteVue,
	},
}
</script>

<style>

</style>
