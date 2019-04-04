test('actual', () => {
	const t = jest.requireActual('../manual-mock');
	const result = t();

	console.log(result);
	expect(result).toBe('test');
});

test('mock', () => {
	const t = jest.requireMock('../manual-mock');
	const result = t();

	console.log(result);
	expect(result).toBe('manual mock test');
});
