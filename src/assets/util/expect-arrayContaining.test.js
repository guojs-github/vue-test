describe('arrayContaining toEqual', () => {
	const expected = ['Alice', 'Bob'];
	it('matches even if received contains additional elements', () => {
		expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
	});
	it('does not match if received does not contain expected elements', () => {
		expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
	});
});

describe('arrayContaining toBeCalledWith', () => {
	const mock = jest.fn();
	const expected = [1, 2];

	test('test arrayContaining toBeCalledWith', () => {
		mock([1, 2, 3]);
		expect(mock).toBeCalledWith(expect.arrayContaining(expected));
	});
});

describe('arrayContaining objectContaining', () => {
});

describe('arrayContaining toMatchObject', () => {
});
