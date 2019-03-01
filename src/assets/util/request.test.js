const { request } = require('./request');

test('request.projectReport', async () => {
	const result = {
		id: 1024,
		title: '集一项目运营汇报（支线部分）',
		time: '2018-08-09 15:52',
		description: ''
	}
	await expect(request.projectReport()).resolves.toEqual(result); 	
});

test('request.dailyReport', async () => {
	await expect(request.dailyReport()).rejects.toThrow('error message'); 	
});
