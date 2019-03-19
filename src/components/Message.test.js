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

	it('equals messages to ["Cat"]', () => { // ������������Ƿ����Ҫ��
		expect(vm.messages).toEqual(["Cat"]);
	});

	it("has the expected html structure", () => { // ����html��ʾ�ṹ�Ƿ����Ҫ��
		expect(vm.$el).toMatchSnapshot();
	});	
});