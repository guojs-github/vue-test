import {data1} from './bypass';
jest.mock('./bypass'); // ����ԴbypassData����������
const {data} = jest.requireActual('./bypass'); // �һ���Ҫ�õ��Ĳ���ʵ�� 

test('bypass module mocks', () => {
	expect(data()).toEqual('actual data');
	expect(data1()).toBeUndefined();
});
