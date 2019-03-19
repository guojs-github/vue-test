import Vue from 'vue';
import Message from "./Message";

describe("Message.test.js", () => {
	let cmp, vm;

	beforeEach(() => {
		cmp = Vue.extend(Message); // Create a copy of the original component
		vm = new cmp({
			data: {
				// Replace data value with this fake data
				messages: ["Cat"]
			}
		}).$mount(); // Instances and mounts the component
	});

	it('equals messages to ["Cat"]', () => { // 检验组件数据是否符合要求
		expect(vm.messages).toEqual(["Cat"]);
	});

	it("has the expected html structure", () => { // 检验html显示结构是否符合要求
		expect(vm.$el).toMatchSnapshot();
	});	
});