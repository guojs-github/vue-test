<template>
	<div class='-content vxe-table'>
		<div class='-title'>
			VXE-TABLE
		</div>
		<vxe-table
			border
			show-header-overflow
			show-overflow
			highlight-hover-row
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
export default {
	name: 'VXE-TABLE', 
	
	components: {
	},
	
	data() {
		return {
			tableHeight: 500,
			tableData: []
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
		}
	}
};
</script>

<style scoped src='./VxeTable.less' lang='less'/>
<style scoped>
</style>
