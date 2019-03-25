describe('arrayContaining toEqual', () => {
	const expected = ['Alice', 'Bob'];
	it('matches even if received contains additional elements', () => {
		expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
	});
	it('does not match if received does not contain expected elements', () => {
		expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
	});
});

describe('arrayContaining toBeCalledWith', () => {
	const mock = jest.fn();
	const expected = [1, 2];

	test('test arrayContaining toBeCalledWith', () => {
		mock([1, 2, 3]);
		expect(mock).toBeCalledWith(expect.arrayContaining(expected));
	});
});

describe('objectContaining', () => {
	const mock1 = jest.fn();
	
	test('test arrayContaining object', () => {
		const position = {
			x: 1,
			y: 1,
			description: '一些描述',
			velocity: 1000
		}
		mock1(position);
		expect(mock1).toBeCalledWith(expect.objectContaining({
			x: expect.any(Number),
			y: expect.any(Number),
			description: expect.any(String)
		}));
	});
});

describe('toMatchObject', () => {
	const houseForSale = {
		bath: true,
		bedrooms: 4,
		kitchen: {
			amenities: ['oven', 'stove', 'washer'],
			area: 20,
			wallColor: 'white',
		},
	};
	const desiredHouse = {
		bath: true,
		kitchen: {
			amenities: ['oven', 'stove', 'washer'],
			wallColor: expect.stringMatching(/white|yellow/),
		},
	};

	test('the house has my desired features', () => {
		expect(houseForSale).toMatchObject(desiredHouse);
	});
});
