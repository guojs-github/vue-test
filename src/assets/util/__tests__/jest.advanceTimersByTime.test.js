jest.useFakeTimers();
test('waits 10 second before ending the game', () => {
	const { timerGame } = require('../timer');
	const callback = jest.fn();
	
	timerGame(callback);

	expect(callback).not.toBeCalled();

	jest.advanceTimersByTime(10000);
	
	expect(callback).toBeCalled();
	expect(callback).toHaveBeenCalledTimes(1);
});
