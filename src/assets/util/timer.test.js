beforeEach(() => { 
	jest.useFakeTimers(); // 此处重置时钟相关计数器
}); 

test('waits 10 second before ending the game', () => {
	const { timerGame } = require('./timer');
	const callback = jest.fn();
	timerGame(callback);

	expect(callback).not.toBeCalled();

	jest.runAllTimers();
	
	expect(callback).toBeCalled();
	expect(callback).toHaveBeenCalledTimes(1);
});

describe('infiniteTimerGame', () => {
	test('schedules a 10-second timer after 1 second', () => {
		const { infiniteTimerGame } = require('./timer');
		const callback = jest.fn();

		infiniteTimerGame(callback);

		// At this point in time, there should have been a single call to
		// setTimeout to schedule the end of the game in 1 second.
		expect(setTimeout).toHaveBeenCalledTimes(1);
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

		// Fast forward and exhaust only currently pending timers
		// (but not any new timers that get created during that process)
		jest.runOnlyPendingTimers();

		// At this point, our 1-second timer should have fired it's callback
		expect(callback).toBeCalled();

		// And it should have created a new timer to start the game over in
		// 10 seconds
		expect(setTimeout).toHaveBeenCalledTimes(2);
		expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
	});
});

test('waits 60 second & count times', () => {
	const { infiniteTimerGame } = require('./timer');
	const callback = jest.fn();

	infiniteTimerGame(callback);

	expect(setTimeout).toHaveBeenCalledTimes(1);
	expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

	// Fast forward 1 minute
	jest.advanceTimersByTime(60000);

	expect(callback).toBeCalled();
	expect(callback).toHaveBeenCalledTimes(6);
});

test('jest.setTimeout', () => {
	jest.setTimeout(1000);
	
	console.log('execute after jest.setTimeout ');
	expect(1).toBe(1);
});


