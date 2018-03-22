/**
 * 私有属性和方法
 * 	js中没有语法表示私有、保护或公共属性和方法。
 * 	js中多有对像的成员是公共的
 *
 */

/**
 * 私有成员
 *
 * js中可以用闭包实现私有成员。
 * 构建函数创建一个闭包，而在闭包范围内部的任意变量都不会暴露给构造函数以外的代码。然而这些私有变量仍然可以用于公共方法中：
 * 即定义在构造函数中，且作为返回对象的一个部分暴露给外部方法。
 * 
 */
function Gadget() {
	//私有成员
	var name = 'ipod';
	//公有函数
	this.getName = function() {
		return name
	}
}
var toy = new Gadget();

console.log(toy.name) //undefined
console.log(toy.getName()) //'ipod';

/**
 * 特权方法
 * 特权方法只是指那些可以访问私有成员的公共方法的一个名称而已
 * 上面的例子中getName()就是一个特权方法，因为它具有访问私有属性name的‘特殊’权限
 * 
 */

/**
 * 私有性失效
 * 当一个特权方法返回一个私有变量，私有变量又是一个对象或者数组那么外面的代码仍然可以访问私有变量，因为它是引用传递的
 */

funtion Gadget() {
	//私有成员
	var specs = {
		screen_width: 320,
		screen_height: 480,
		color: 'white'
	}
	//公有函数
	this.getSpec = function() {
		return specs;
	}
}

/**
 * note: 对于这种意外行为的解决方法：
 */