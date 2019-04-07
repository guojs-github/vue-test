// genMockFromModule.test.js
const utils = jest.genMockFromModule('../utils').default;
utils.isAuthorized = jest.fn(secret => secret === 'not wizard');

test('implementation created by jest.genMockFromModule', () => {
	expect(utils.authorize.mock).toBeTruthy();
	// expect(utils.authorize()).toEqual('token'); // �����⺯�������������ʧ��
	expect(utils.isAuthorized('not wizard')).toEqual(true);
});