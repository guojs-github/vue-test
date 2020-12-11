import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Print from '@/components/Print/Print'
import VxeTable from '@/components/VxeTable/VxeTable'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: Home
	}, {
		path: '/Print',
		name: 'Print',
		component: Print
	}, {
		path: '/vxe-table',
		name: 'VxeTable',
		component: VxeTable
	}]
})
