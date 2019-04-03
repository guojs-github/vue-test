test('same instances', () => {
	const sum1 = require('../sum');
	const sum2 = require('../sum');
	expect(sum1).toEqual(sum2);
});

test('different instances', () => {
	const sum1 = require('../sum');
	jest.resetModules();
	const sum2 = require('../sum');
	expect(sum1).not.toEqual(sum2); // 大概因为重置了require的登记记录，所以没有复用原有引用，变成了两个实例
});

