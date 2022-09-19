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

		<dialog-edit
		v-if="dialogs.edit"
		@no-selected-in-delete-dialog="dialogs.edit = false"
		:task="task"
		/>

		<dialog-delete
		v-if="dialogs.delete"
		@no-selected-in-delete-dialog="dialogs.delete = false"
		:task="task"
		/>
	</div>
</template>

<script>
import DialogEditVue from '@/components/Todo/Dialogs/DialogEdit.vue'
import DialogDeleteVue from '@/components/Todo/Dialogs/DialogDelete.vue'
export default {
	props: ['task'],
    data: () => ({

		dialogs: {
			delete: false,
			edit: false
		},
		items: [
			{
				title: 'Edit',
				icon: 'mdi-pencil',
				click() {
					this.dialogs.edit = true;
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
		'dialog-edit': DialogEditVue,
		'dialog-delete': DialogDeleteVue,
	},
}
</script>

<style>

</style>
