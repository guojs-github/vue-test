beforeEach(() => {
	jest.resetModules();
});

test('mock module name', () => {
	jest.mock('../utils', () => {
		return jest.fn(() => 1);
	});

	const moduleName = require('../utils');
	expect(moduleName()).toEqual(1);

	// jest.unmock('../utils'); // 如果有这句，这句话会在expect使用之前就释放
});

test('doMock module name', () => {
	jest.doMock('../utils', () => {
		return jest.fn(() => 2);
	});

	const moduleName = require('../utils');
	expect(moduleName()).toEqual(2);

	jest.dontMock('../utils'); 
});