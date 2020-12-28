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
//数字类型 值可以为二进制、八进制、十进制、十六进制
var num = 11;
var str = "chenjian";
var words = '您好，我叫 ${ str } ，我今年 ${ str+10 } 岁了'; //这里输出不会输出变量值 todo ???
console.log(words);
