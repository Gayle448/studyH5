/*例子1*/
var message = "Hello World";
console.log(message);
/*例子2*/
//类 -- 整体而言就像是js和swift的结合体
var girl = /** @class */ (function () {
    function girl() {
    }
    //方法
    girl.prototype.name = function () {
        console.log("chenjian");
    };
    return girl;
}());
//对象
var obj = new girl();
//对象调用方法
obj.name();
/*例子3*/
//数字类型 值可以为二进制、八进制、十进制、十六进制；JS和TS 没有整数类型
var num = 11;
var str = "chenjian";
var words = '您好，我叫 ${ str } ，我今年 ${ str+10 } 岁了'; //这里输出不会输出变量值 todo ???
console.log(words);
var flag = true;
//数组类型1: 在元素类型后面加[]
var arr = [1, 2];
//数组类型2：数组泛型
var arrA = [1, 2];
//元祖：用来表示已经元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
var x;
x = ['chenjian', 2];
console.log(x[0]);
//枚举：用于定义数值集合
var age;
(function (age) {
    age[age["young"] = 0] = "young";
    age[age["middle"] = 1] = "middle";
    age[age["old"] = 2] = "old";
})(age || (age = {}));
;
var myage = age.old;
console.log(myage); //2
//枚举笔记：
var getValue = function () {
    return 0;
};
var List;
(function (List) {
    List[List["A"] = getValue()] = "A";
    List[List["B"] = 2] = "B";
    List[List["C"] = 3] = "C";
})(List || (List = {}));
console.log(List.A); // 0
console.log(List.B); // 2
console.log(List.C); // 3
//void : 用于标志方法返回值的类型，表示该方法没有返回值
//null : 表示对象值缺失
//undefined : 用于初始化变量为一个未定义的值
//never : 是其他类型（包括null 和 undefined）的子类型，代表从不会出现的值
//any 可以赋予任意类型的值。和swift option 可选值类似吧？
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
