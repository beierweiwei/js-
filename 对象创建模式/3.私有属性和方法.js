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
 * note: 对于这种意外行为的解决方法，使用getSpec()返回一个新对象，只包含sepcsz中你需要的数据。最低授权原则
 * 		另一种方法就是克隆函数创建对象副本
 */



/**
 * 对象字面量及私有性
 */

var myobj
(function() {
	var name = 'my, oh my';
	myobj = {
		getName: function() {
			return name;
		}
	}
})

//或者
var myobj = (function() {
	var name = 'my, oh my';
	return {
		getName: function() {
			return name;
		}
	}
})()

/**
 * 这个例子也称为模块模式的基础框架。
 */

/**
 * 原型和私有性
 *
 * 当私有成员与构造函数一起使用时， 其中的一个缺点在于每次调用构造函数以创建函数时，这些私有成员都会被重新创建。
 * 解决办法：可以将常用的属性和方法添加到构造函数的prototype中。
 * 实现这一点可以使用构造函数中的私有属性和对象字面量中的私有属性 
 */

function Gadget() {
	//私有成员
	var name = 'ipod';
	//公有函数
	this.getName = function() {
		return name;
	}
}

Gadget.prototype = (function() {
	var browser = 'Mobile Webkit';
	return {
		getBrowser: function() {
			return this.borwser;
		}
	}
})()

/**
 * 将私有方法揭示为公共方法
 *
 * 将构造函数、或对象的私有方法，暴露到对象的方法上。
 */
var myarray;
(function() {
	var toString = Object.prototype.toString;
	var arrayToStr = '[object array]';

	function isArray(arr) {
		return toString.call(arr) === arrayToStr
	}
	function indexOf(arr, item) {
		var i = 0, len = arr.length;
		for(; i < len; i++) {
			if(arr[i] === item) {
				return i;
			}
		}
		return -1;
	}

	myarray = {
		isArray: isArray,
		indexOf: indexOf,
		inArray: indexOf
	}

})()
