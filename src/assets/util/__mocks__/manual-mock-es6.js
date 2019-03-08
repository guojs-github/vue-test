function test() {
	window.matchMedia("(min-width: 400px)"); // 这个函数JSDOM没有实现会出错
	
	return 'manual mock test';
}

module.exports = test;
