import './matchMedia.mock'; // Must be imported before the tested file�����window.matchMedia����JSDOMû��ʵ�ֵ�����
import t from './manual-mock-es6';

jest.mock('./manual-mock-es6');

test('Manual mock test es6', () => {
	const result = t();
	console.log(result);
	expect(result).toBe('manual mock test');
});

