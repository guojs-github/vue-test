<template>
	<div class='-content el-tabs-demo'>
		<div class='-title'>
			EL-TABS
		</div>
		<el-tabs 
			v-model='currentTab'
			type='border-card'>
			<el-tab-pane 
				v-for='(item) in tabs'
				:key='item.key'
				:label='item.title'
				:name='item.name'>
				{{ item.title }}
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import Sortable from 'sortablejs';

export default {
	name: 'EL-TABS', 
	
	components: {
	},
	
	data() {
		return {
			tabs: [{
				name: '用户管理',
				title: '用户管理',
				key: 'user-management'
			}, {
				name: '配置管理',
				title: '配置管理',
				key: 'config-management'
			}, {
				name: '角色管理',
				title: '角色管理',
				key: 'role-management'
			}, {
				name: '定时任务补偿',
				title: '定时任务补偿',
				key: 'compensate'
			}],
			currentTab: '用户管理'
		};
	},

	created() {
		console.log('el-tabs created');		

		this.init();
	},

	mounted () {
		console.log('On mounted el-tabs-demo page.');
	},
	
	beforeDestroy() {
		console.log('On before destory el-tabs page.');

		this.uninit();
	},

	methods: {		
		/*************************/
		init() {
			console.log('Initialize.');			
			
			this.tabDrop();
		},

		uninit() {
			console.log('Uninitialize.');
		},

		tabDrop() {
			this.$nextTick(function() {
				const el= document.querySelector('.el-tabs__nav');
				const _this = this;
				Sortable.create(el, {
					onEnd({ newIndex, oldIndex }) { //oldIIndex拖放前的位置， newIndex拖放后的位置
						const currentTab = _this.tabs.splice(oldIndex, 1)[0];	//鼠标拖拽当前的el-tabs-pane
						_this.tabs.splice(newIndex, 0, currentTab);			//tableData 是存放所以el-tabs-pane的数组
				　　}
				})
			});
		},		
	}
};
</script>

<style scoped src='./ElTabs.less' lang='less'/>
<style scoped>
</style>
