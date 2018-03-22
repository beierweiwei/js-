/**
 *  命名空间：
 *  
 *  优点：命名空间有助于减少程序中所需要的全局变量的数量，同时还有助于避免命名冲突或过长的名字前缀
 *
 *  缺点：需要更多的字符，变量和函数需要添加前缀，增加代码量
 *  			仅有一个全局实例意味着任何部分的代码都可以修改该全局实例，并且其余的功能能获得更新后的状态。
 *  			长嵌套意味着更长（更慢）的查询时间
 *  			note: 沙盒模式可以解决以上
 *  			
 *
 *  创建一个全局的MYAPP对象，然后所有的函数和变量挂载到该对象上。
 */
var MYAPP = {};

MYAPP.Parent = function() {};
MYAPP.Child = function() {};

MYAPP.some_var = 1;

//一个容器对象
MYAPP.modules = {};

//嵌套对象
MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a: 1, b: 2};
MYAPP.modules.module2 = {};

//note: 一般会以全部大写的方式来命名全局变量，常量也通常使用全部大写命名。


/**
 * 通用命名函数
 *
 * 由于程序的复杂度增加、代码的某系部分被分割成不同文件等因素、添加到命名空间上的一些属性可能已经存在，这导致后定义的属性会覆盖前者。
 * 因此，在添加一个属性或创建一个命名空间之前，最好检查它是否已经存在
 */

//不安全的代码
var MYAPP = {};
//更好的风格
if(typeof MYAPP === 'undefined') {
	var MYAPP = {};
}
// 或者用更短的语句
var MYAPP = MYAPP || {};


var MYAPP = MYAPP || {};

MYAPP.namespace = function(ns_string) {
	var parts = ns_string.splite('.'),
			parent = MYAPP,
			i;

	if(parts[0] === 'MYAPP'){
		parts = parts.slice(1);
	}

	for(i = 0; i < parts.length; i++) {
		if(typeof partent[parts[i]] === 'undefined') {
			partent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
}






