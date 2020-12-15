<template>
	<div class='-content vxe-table-demo'>
		<div class='-title'>
			VXE-TABLE
		</div>
		<vxe-table
			ref='vxe-table-demo'
			border
			show-header-overflow
			show-overflow
			highlight-hover-row
			highlight-current-column
			column-key
			:height='tableHeight'
			:data='tableData'>
			<vxe-table-column type='seq' title='序号' width='60'/>
			<vxe-table-column field='name' title='姓名' width='200'/>
			<vxe-table-column field='sex' title='性别' width='100'/>
			<vxe-table-column field='age' title='年龄' width='100'/>
			<vxe-table-column field='address' title='联系地址'/>
		</vxe-table>
	</div>
</template>

<script>
import Sortable from 'sortablejs';

export default {
	name: 'VXE-TABLE', 
	
	components: {
	},
	
	data() {
		return {
			tableData: [],
			tableHeight: 500
		};
	},

	created() {
		console.log('vxe-table created');
		
		this.init();
	},

	mounted () {
		console.log('On mounted vxe-table page.');
	},
	
	beforeDestroy() {
		console.log('On before destory vxe-table page.');

		this.uninit();
	},

	methods: {		
		/*************************/
		init() {
			console.log('Initialize.');
			
			this.fillData();
			this.columnDrop();
		},

		uninit() {
			console.log('Uninitialize.');
		},
		
		fillData() { // Fill test data
			let result = [];
			for (let i = 0; i < 10000; i++) {
				let row = {
					name: '张三',
					sex: 'MALE',
					age: i,
					address: '中国海南省海口市琼山区龙塘镇'
				};
				
				result.push(row);
			}
			
			this.$set(this, 'tableData', result);
		},
		
		columnDrop() { // Column drag & drop			
			this.$nextTick(() => {
				let table = this.$refs['vxe-table-demo'];
				
				this.sortable = Sortable.create(table.$el.querySelector('.body--wrapper>.vxe-table--header .vxe-header--row'), {
					handle: '.vxe-header--column',
					onEnd: ({newIndex, oldIndex}) => {
						let tableColumn = table.getColumns(); // 获取表格当前列清单
						let currRow = tableColumn.splice(oldIndex, 1)[0]; // 从原来的位置删除列
						tableColumn.splice(newIndex, 0, currRow); // 新的位置插入列
						table.loadColumn(tableColumn);
					}
				})
			});
		}		
	}
};
</script>

<style scoped src='./VxeTable.less' lang='less'/>
<style scoped>
</style>
