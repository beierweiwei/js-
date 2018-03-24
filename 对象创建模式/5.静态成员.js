/**
 * 静态成员和方法就是那些从一个实例到另一个实例都不会发生改变的属性和方法。
 *
 *
 * 公有静态成员
 * 在js中没有特殊的语法来表示静态成员。但是可以通过使用构造函数并且向其添加属性这种方式来实现。
 */

//构造函数
var Gadget = function() {};

//静态方法
Gadget.isShiny = function() {
	return 'you bet';
}

//向该原型添加一个普通方法
Gadget.prototype.setPrice = function(price) {
	this.price = price;
}

//调用静态方法
Gadget.isShiny();

var iphone = new Gadget();
iphone.setPrice(500);

//note: 在这种情况下，如果静态方法内部使用this要特别注意。当执行Gadget.isShiny()时，那么isShiny()内部this将会指向Gadget构造函数。如果执行iphone.isShiny(),
//那么this将会指向iphone;
//


/**
 * 私有静态成员
 * 具有如下属性：
 *   以同一个构造函数创建的所有对象共享该成员
 *   构造函数外部不可访问该成员
 */


var Gadget = (function() {
	//静态变量/属性
	var counter = 0;

	//返回
	//该构造函数新的实现
	return function() {
		console.log(counter + 1);
	}
})();//立即执行

//每个对象都以1为单位递增counter，这个静态属性实际上成为对象ID标识符，它唯一标识了以Gadget构造函数创建的每个对象。
///这种标识符可以通过特权方法公开
///构造函数
var Gadget = (function () {
	//静态变量、属性
	var counter = 0;
	NewGadget;

	NewGadget = function() {
		counter ++;
	}
	//特权方法
	NewGadget.prototype.getLastId = function() {
		return counter;
	}
	//覆盖该构造函数
	return NewGadget;
})();//立即执行


//note: 静态属性（公有或私有）使用会带来很多便利，他们可以包含非实例相关的方法和数据，并且不会为每个实例重新创建静态属性。