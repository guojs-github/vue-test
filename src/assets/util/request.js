/*
  请求接口对象
  20190301 GuoJS
*/

const request = {
	projectReport: () => {
		console.log('Get project report.');

		let p = new Promise(function (resolve, reject) {
			resolve({
				id: 1024,
				title: '集一项目运营汇报（支线部分）',
				time: '2018-08-09 15:52',
				description: ''
			})
		})
		return p
	},
	dailyReport: () => {
		console.log('Get daily report.');

		let p = new Promise(function (resolve, reject) {
			reject('error message')
		})
		return p
	}

}

export {
  request
}
