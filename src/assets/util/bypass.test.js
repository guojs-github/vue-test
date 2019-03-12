import {data1} from './bypass';
jest.mock('./bypass'); // 数据源bypassData变成虚拟的了
const {data} = jest.requireActual('./bypass'); // 我还是要用到的部分实现 

test('bypass module mocks', () => {
	expect(data()).toEqual('actual data');
	expect(data1()).toBeUndefined();
});
