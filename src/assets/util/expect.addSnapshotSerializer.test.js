import request from 'request';
expect.addSnapshotSerializer(request);

test('match expression', () => {
	expect('1').toEqual('1');
});

// affects expect(value).toMatchSnapshot() assertions in the test file