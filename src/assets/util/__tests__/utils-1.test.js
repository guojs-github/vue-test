// utils-1.test.js
import utils from '../utils';
jest.enableAutomock();

test('original implementation', () => {

	// now we have the mocked implementation,
	expect(utils.authorize._isMockFunction).toBeTruthy();
	expect(utils.isAuthorized._isMockFunction).toBeTruthy();
});

