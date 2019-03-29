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
