import './matchMedia.mock'; // Must be imported before the tested file，解决window.matchMedia函数JSDOM没有实现的问题
import t from './manual-mock-es6';

jest.mock('./manual-mock-es6');

test('Manual mock test es6', () => {
	const result = t();
	console.log(result);
	expect(result).toBe('manual mock test');
});

