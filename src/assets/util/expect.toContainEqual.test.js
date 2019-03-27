describe('my beverage', () => {
  test('is delicious and not sour', () => {
	const myBeverages = [{
		delicious: true
	}, {
		sour: false
	}, {
		delicious: false,
		sour: false
	}, {
		delicious: true,
		sour: false
	}];
    const myBeverage = {
		sour: false,
		delicious: true
	};

    expect(myBeverages).toContainEqual(myBeverage);
  });
});