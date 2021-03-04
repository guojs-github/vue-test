// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// vxe-table
import 'xe-utils';
import VXETable from 'vxe-table';
import VXETablePluginElement from 'vxe-table-plugin-element';
import 'vxe-table/lib/index.css'; 
import 'vxe-table-plugin-element/dist/style.css';

Vue.config.productionTip = false
Vue.use(ElementUI)

// vxe-table
VXETable.interceptor.add('event.clearActived', (params, event) => {
	// 比如点击了某个组件的弹出层面板之后，此时被激活单元格不应该被自动关闭，通过返回 false 可以阻止默认的行为。
	if (event.target.className.indexOf('el-time-spinner__item') > -1) {
		return false;
	}
	if (event.target.className.indexOf('el-time-panel__btn') > -1) {
		return false;
	}
});
VXETable.use(VXETablePluginElement);
Vue.use(VXETable);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
