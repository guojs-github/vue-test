function DisgustingFlavorError (message) {
	this.message = message;
	console.log('message:' + this._message);
};

function drinkFlavor(flavor) {
	if (flavor == 'octopus') {
		throw new DisgustingFlavorError('yuck, octopus flavor');
	}
	// Do some other stuff
}

function drinkFlavor2(flavor) {
	if (flavor == 'octopus') {
		throw new DisgustingFlavorError({
			code: 1,
			message: '你好'
		});
	}
	// Do some other stuff
}

test('throws on octopus', () => {
  expect(() => {
    drinkFlavor('octopus');
  }).toThrow();
});

test('throws on octopus', () => {
	function drinkOctopus() {
		drinkFlavor('octopus');
	}
	// Test that we get a DisgustingFlavorError
	expect(drinkOctopus).toThrowError(DisgustingFlavorError);

	// 测试snapshot对象内容是否匹配
	expect(drinkOctopus).toThrowErrorMatchingSnapshot();

	// Test that the error message says "yuck" somewhere: these are equivalent
	expect(drinkOctopus).toThrowError(/yuck/);
	expect(drinkOctopus).toThrowError('yuck');

	// Test the exact error message
	expect(drinkOctopus).toThrowError(/^yuck, octopus flavor$/);

	function drinkOctopus2() {
		drinkFlavor2('octopus');
	}
	expect(drinkOctopus2).toThrowErrorMatchingSnapshot();

});