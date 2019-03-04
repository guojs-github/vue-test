const forEach = require('./mock');

test('forEach', () => {
	const mockCallback = jest.fn(x => 42 + x)

	forEach([0, 1], mockCallback);
	console.log(mockCallback.mock)

	// The mock function is called twice
	expect(mockCallback.mock.calls.length).toBe(2);

	// The first argument of the first call to the function was 0
	expect(mockCallback.mock.calls[0][0]).toBe(0);

	// The first argument of the second call to the function was 1
	expect(mockCallback.mock.calls[1][0]).toBe(1);

})

test('Mock result', () => {
	const mock = jest
		.fn()
		.mockReturnValueOnce(1)
		.mockReturnValueOnce(10)
		.mockReturnValueOnce(20);
		
	console.log(mock(), mock(), mock());
})

test('Mock implementation', () => {
	jest.mock('./sum.js'); // this happens automatically with automocking
	const sum = require('./sum');

	// 这里的虚拟实现会覆盖实际实现
	sum
		.mockImplementation(() => 'default')
		.mockImplementationOnce(() => 'first call')
		.mockImplementationOnce(() => 'second call')
		.mockName('sum');
	console.log(sum(), sum(), sum());

	const sum2 = jest
		.fn(() => 'sum2 default')
		.mockImplementationOnce(() => 'sum2 first call')
		.mockImplementationOnce(() => 'sum2 second call')
		.mockName('sum2');
	console.log(sum2(), sum2(), sum2());
})

test('Custom matcher', () => {
	const mock = jest.fn((val) => val);
	console.log(mock(1), mock(101), mock(0));
	
	expect(mock).toBeCalled();
	expect(mock).toBeCalledWith(101);
	// The mock function was called at least once with the specified args
	// expect(mock.mock.calls).toContain([101]);
	expect(mock.mock.calls[mock.mock.calls.length - 1]).toEqual([0]);
	expect(mock).toMatchSnapshot();	
})
