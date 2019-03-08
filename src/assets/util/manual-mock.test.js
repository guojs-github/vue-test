jest.mock('./manual-mock')

test('Manual test', () => {
	const t = require('./manual-mock');
	const result = t();
	console.log(result);
	expect(result).toBe('manual mock test');
});

