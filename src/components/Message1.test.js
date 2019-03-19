import { shallowMount } from "@vue/test-utils";
import Message from "./Message";

describe("Message1.test.js", () => {
	let cmp;

	beforeEach(() => {
		cmp = shallowMount(Message, {
			// Create a shallow instance of the component
			data: () => ({ messages: ['Cat'] })
		});
	});

	it('equals messages to ["Cat"]', () => { // 检验组件数据是否符合要求
		expect(cmp.vm.messages).toEqual(["Cat"]);
	});

	it("has the expected html structure", () => { // 检验html显示结构是否符合要求
		expect(cmp.element).toMatchSnapshot();
	});	
});