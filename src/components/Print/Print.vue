<template>
	<div class='-content print'>
		<div class='-title'>
			测试打印
		</div>

		<div class='-row'>
			<div class='-inline -ef-click -light-red -red-button print-4-in-1'>
				一页打印四页内容？
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Print', 
	
	components: {
	},
	
	data() {
		return {
		};
	},

	created() {
		console.log('Print created');
		
		this.init();
	},

	mounted () {
		console.log('On mounted print page.');
	},
	
	beforeDestroy() {
		console.log('On before destory print page.');

		this.uninit();
	},

	methods: {		
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

<style scoped src='./Print.less' lang='less'/>
<style scoped>
</style>
