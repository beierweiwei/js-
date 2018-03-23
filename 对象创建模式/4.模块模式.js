/** 
 * 模块模式
 *
 * 模块模式提供一种创建自包含非耦合代码片段的有利工具，可以将它视为黑盒功能，并且可以根据需要增加删除模块。
 *
 * 模块模式使用了多种模式组合。
 *   命名空间
 *   即时函数
 *   私有和特权成员
 *   声明依赖
 */

//1 建立一个命名空间
	MYAPP.namespace('MYAPP.utilities.array');

//2 定义该模块
//3 添加一些公共方法
	MYAPP.utilities.array = (function() {
		//依赖
		var uobj = MYAPP.utilities.object,
			ulang = MYAPP.utilities.lang,

		//私有属性
			array_string = '[object Array]',
			ops = Object.prototype.toString;

		//私有方法
		// ...
		//var 变量定义结束
	
	//可选的一次性初始化过程
	// ...
	
	//公有API
		return {
			inArray: function() {

			},
			isArray: function() {

			}
			//...更多属性和方法
		}
	})()

/**
 * 揭示模块模式 略
 */

/**
 * 创建构造函数的模块
 *
 * 有时候使用构造函数创建对象更方便，使用模块模式的方式执行创建对象的操作。
 * 这和之前的通过直接创建对象的方法唯一的区别在于包装模块的即使函数返回一个函数，而不是一个对象。
 */
MYAPP.namespace('MYAPP.utilities.Array');
MYAPP.utilities.Array = (function() {
	//依赖
	var uobj = MYAPP.utilities.object,
			ulang = MYAPP.utilities.lang,
	//私有属性和方法
	Constr;

	//可选的一次性初始化工程
	
	//公有API--构造函数
	Constr = function(o) {
		this.elements = this.toArray(o)
	}

	//公有API--原型
	Constr.prototype = {
		constructor: MYAPP.utilities.Array,
		version: 2.0,
		toArray: function(obj) {
			for( var i = 0, a = []; i < obj.length; i++) {
				a[i] = obj[i];
			}
			return a;
		}
	}
	//返回要分配给命名空间的构造函数
	return Constr;

})()

/**
 * 将全局变量导入到模块中
 * 这有助于即时函数中全局符号的解析。
 */
MYAPP.utilities.module = (function(app, global) {

})(MYAPP, this);

/**
 * 沙箱模式
 *
 * 解决了命名空间模式的缺点：
 * 		1、对单个全局变量的依赖变成对应用程序的全局变量依赖。在命名空间模式中，是没有办法使用同一个应用程序或库
 * 		的两个版本运行在同一个页面。
 * 		2、以点分割的名字来说，需要更长的字符和更长的解析时间
 *
 * 沙箱模式提供了一个可用于模块运行的环境，且不会对其他模块和个人沙箱造成任何影响。
 */

//全局构造函数
//
//在命名空间模式中，有一个全局对象。在沙箱模式中，则是一个全局的构造函数，让我们称之为Sandbox();
//可以使用该构造函数创建对象并可以传递回调函数，它变成了代码的隔离沙箱运行环境。


//增加模块
Sandbox.modules = {};

sandbox.modules.dom = function(box) {
	box.getElement = function() {};
	box.getStyle = function() {};
	box.foo = 'bar';
}

sandbox.modules.event = function(box) {
	//如果需要就访问Sandbox原型，如下
	//box.constructor.prototype.m = 'mmmm';
	box.attachEvent = function() {};
	box.dettachEvent = function() {};
}

//实现构造函数
function Sandbox() {
	//声明
	var args = Array.prototype.slice.call(arguments),
			//callback
			callback = args.pop(),
			//模块可以作为数组货单纯的参数传递
			modules = (args[0] && typeof args[0] === 'string') ? args : args[0],

			//确保该函数作为构造函数使用
			if(!(this instanceof Sandbox)) return new Sandbox(modules, callback);

			//需要向this添加的属性
			this.a = 1;

			//现在向该核心this提添加模块
			//不指定模块名称或者指定*都表示使用所有模块
			if(!modules || modules === '*') {
				modules = [];
				for(i in Sandbox.modules) {
					modules.push(i);
				}
			}

			//初始化所需模块
			for(var i = 0; i < modules.length; i++) {
				Sandbox.modules[modules[i]](this);
			}

			callback(this);

}

//Sandbox 需要的原型属性
Sanbox.prototype = {
	name: 'my application',
	version: '1.0',
	getName: function() {
		return this.name;
	}
}
