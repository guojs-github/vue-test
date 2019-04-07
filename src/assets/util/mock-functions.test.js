const video = require('./video');
const mockFunc1 =jest.fn().mockName('mock函数1');

test('set/get mock function name', () => {
	mockFunc1(1, 2);
	mockFunc1('3', 4);
	mockFunc1({
		index: 3,
		name: '测试'
	});
	expect(mockFunc1).toHaveBeenCalled();
});

test('mock function calls', () => {
	expect(mockFunc1.mock.calls).toEqual(expect.arrayContaining([[1, 2]]));
	expect(mockFunc1.mock.calls).toEqual(expect.arrayContaining([['3', 4]]));
	expect(mockFunc1.mock.calls).toEqual(expect.arrayContaining([[{
		index: 3,
		name: '测试'		
	}]]));
});

test('mock function instance', () => {
	const a = new mockFunc1();
	const b = new mockFunc1();
	
	expect(mockFunc1.mock.instances).toHaveLength(5);
	mockFunc1.mock.instances[mockFunc1.mock.instances - 1] === a;
})

test('mock function reset/restore after spy on', () => {
	const spy = jest.spyOn(video, 'play');
	const isPlaying = video.play();

	expect(spy).toHaveBeenCalled();
	expect(isPlaying).toBe(true);

	spy.mockReset();
	spy.mockRestore();
})

test('mockImplementation', () => {
	const mockFn = jest.fn(scalar => 42 + scalar);
	
	expect(mockFn(10)).toBe(52);
});

test('mockImplementation class', () => {
	jest.mock('./SomeClass');
	const mMock = jest.fn()
	const SomeClass = require('./SomeClass');
	SomeClass.mockImplementation(() => {
		return {
			m: mMock
		}
	})

	const some = new SomeClass()
	some.m('a', 'b')
	console.log('Calls to m: ', mMock.mock.calls)
});

test('mockImplementationOnce', () => {
	var myMockFn = jest.fn(() => 'default')
	  .mockImplementationOnce(() => 'first call')
	  .mockImplementationOnce(() => 'second call');

	console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());	
});

test('mockReturnValue', () => {
	const fn = jest.fn().mockReturnValue(100)
					.mockReturnValueOnce(11)
					.mockReturnValueOnce('Hello');
	
	console.log(fn(), fn(), fn(), fn());
});
	