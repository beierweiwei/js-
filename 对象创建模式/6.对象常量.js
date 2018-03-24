/**
 * 对象常量
 *
 * js中没有常量的概念。
 * 变通方案：使用命名约定，不应该被修改的变量全部用大写字母以突出显示，实际上这个约定以内置到js对象中了
 * 
 */
Math.PI;
Math.SQRT2;
Number.MAX_VALUE;

//自己创建的常量也可以使用该约定。同时构造函数中和对象字母量中都可以使用全部大写的属性来表示常量。

//如果你真的想要一个不可变的值，可以创建一个私有属性并提供一个（getter）取值方法，但并不提供设值函数（setter）。
//
//
//下面是一个通用的Const(常量)对象实现的方法示例。
var const = (function() {
	var consters = {};
	ownProp = Object.prototype.hasOwnProperty,
	allowed = {
		string: 1,
		number: 1,
		boolean: 1
	},
	prefix = (Math.random() + "_").slice(2);

	return {
		set: function(name, value) {
			if(this.isDefined(name)) {
				return false;
			}
			if(!ownProp.call(allowed, typeof value) {
				return false;
			}
			constans[prefix + name] = value;
			return true;
		},
		isDefined: function(name) {
			return ownProp.call(constants, prefix + name);
		},
		get: function(name) {
			if(this.isDefined(name)) {
				return constants[prefix + name];
			}
			return null;
		}
	}
})()