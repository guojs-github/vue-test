<template>
	<div class='-content home'>
		<div class='-title'>
			功能清单
		</div>

		<div class='-row'>
			<div class='-inline -ef-click -light-red -red-button test-print' @click='onTestPrint'>
				测试打印
			</div>
			<div class='-inline -ef-click -light-red -red-button test-vxe-table' @click='onTestVxeTable'>
				测试vxe-table
			</div>
			<div class='-inline -ef-click -light-red -red-button test-el-tabs' @click='onTestElTabs'>
				测试el-tabs
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home', 
	
	components: {
	},
	
	data() {
		return {
		};
	},

	created() {
		console.log('Home created');
		
		this.init();
	},

	mounted () {
		console.log('On mounted home page.');
	},
	
	beforeDestroy() {
		console.log('On before destory home page.');

		this.uninit();
	},

	methods: {	
		onTestPrint() {
			console.log('On test print');
			
			this.$router.push({
				path: '/Print',
				name: 'Print'
			})
		},
		
		onTestVxeTable() {
			console.log('On test vxe-table');
			
			this.$router.push({
				path: '/vxe-table',
				name: 'VxeTable'
			})
		},
		
		onTestElTabs() {
			console.log('On test el-tabs');
			
			this.$router.push({
				path: '/el-tabs',
				name: 'ElTabs'
			})
		},
		
		/*************************/
		init() {
			console.log('Initialize.');
		},

		uninit() {
			console.log('Uninitialize.');
		}
	}
};
</script>

<style scoped src='./Home.less' lang='less'/>
<style scoped>
</style>
