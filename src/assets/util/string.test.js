const testedString = 'abc1234567890';

describe('contain string', () => {	
	test('contain "c123"', () => {
		expect(testedString).toEqual(expect.stringContaining('c123'));
	});
});

describe('match string', () => {
	test('match expression', () => {
		expect(testedString).toEqual(expect.stringMatching(/^abc[0-9]+0$/));
	});

	const expected = [
		expect.stringMatching(/^A/),
		expect.stringMatching(/^[BR]/),
	];
	test('match string array', () => {
		expect(['Alice', 'British', 'hello']).toEqual(expect.arrayContaining(expected));
		expect(['British', 'hello']).not.toEqual(expect.arrayContaining(expected));
	});
});

