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

	it('equals messages to ["Cat"]', () => { // ������������Ƿ����Ҫ��
		expect(cmp.vm.messages).toEqual(["Cat"]);
	});

	it("has the expected html structure", () => { // ����html��ʾ�ṹ�Ƿ����Ҫ��
		expect(cmp.element).toMatchSnapshot();
	});	
});