// console.log(this);//this指向的是DedicatedWorkerGlobalScope对象
// console.log(self);//self和this效果一样

// this.onmessage:在子线程里接收消息

// 根据索引返回对应位置的斐波拉契数列的值
function fibonacii(n) {
	if (n === 1 || n === 2) {
		return 1;
	}
	return fibonacii(n - 1) + fibonacii(n - 2);
}

this.onmessage = function(e) {
	// e事件对象的data属性可以接收主线程传过来的数据
	var data = e.data;
	var res = fibonacii(data);
	this.postMessage(res);
}
