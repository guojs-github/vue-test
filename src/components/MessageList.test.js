import { mount } from "@vue/test-utils";
import MessageList from "./MessageList";

describe("MessageList.test.js", () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(MessageList, {
			// Be aware that props is overridden using `propsData`
			propsData: {
				messages: ["Cat"]
			}
		});
	});

	it('has received ["Cat"] as the message property', () => {
		expect(cmp.vm.messages).toEqual(["Cat"]);
	});

	it("has the expected html structure", () => {
		expect(cmp.element).toMatchSnapshot();
	})
});