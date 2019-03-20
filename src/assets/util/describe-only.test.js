const myBeverage = {
	delicious: true,
	sour: false
};

describe.only('only describe', () => {	
	test('is delicious', () => {
		expect(myBeverage.delicious).toBeTruthy();
	});

	test('is not sour', () => {
		expect(myBeverage.sour).toBeFalsy();
	});
});

describe('other describe', () => {
	// ... will be skipped
	test('is delicious', () => {
		expect(myBeverage.delicious).toBeTruthy();
	});

	test('is not sour', () => {
		expect(myBeverage.sour).toBeFalsy();
	});
});