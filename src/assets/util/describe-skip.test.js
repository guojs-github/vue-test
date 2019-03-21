const myBeverage = {
	delicious: true,
	sour: false
};

describe('describe', () => {	
	test('is delicious', () => {
		expect(myBeverage.delicious).toBeTruthy();
	});

	test('is not sour', () => {
		expect(myBeverage.sour).toBeFalsy();
	});
});

describe.skip('skipped describe', () => {
	// ... will be skipped
	test('is delicious', () => {
		expect(myBeverage.delicious).toBeTruthy();
	});

	test('is not sour', () => {
		expect(myBeverage.sour).toBeFalsy();
	});
});