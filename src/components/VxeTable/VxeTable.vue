<template>
	<div class='-content vxe-table'>
		<div class='-title'>
			VXE-TABLE
		</div>
	</div>
</template>

<script>
export default {
	name: 'VXE-TABLE', 
	
	components: {
	},
	
	data() {
		return {
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
		},

		uninit() {
			console.log('Uninitialize.');
		}
	}
};
</script>

<style scoped src='./VxeTable.less' lang='less'/>
<style scoped>
</style>
