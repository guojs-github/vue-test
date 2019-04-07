// genMockFromModule.test.js
const utils = jest.genMockFromModule('../utils').default;
utils.isAuthorized = jest.fn(secret => secret === 'not wizard');

test('implementation created by jest.genMockFromModule', () => {
	expect(utils.authorize.mock).toBeTruthy();
	// expect(utils.authorize()).toEqual('token'); // 是虚拟函数，所以这个会失败
	expect(utils.isAuthorized('not wizard')).toEqual(true);
});