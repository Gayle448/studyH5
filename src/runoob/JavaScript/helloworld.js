/* JavaScript 是互联网上最流行的脚本语言，
这门语言可用于 HTML 和 web，更可广泛用于服务器、PC、笔记本电脑、平板电脑和智能手机等设备。

JavaScript 是 Web 的/轻量级的 编程语言。
所有现代的 HTML 页面都使用 JavaScript。

这是一个外部JS文件
*/


function changeFunction ()
{
    document.getElementById("demo").style.color = "#000000"
    console.log("哈哈哈哈哈哈,我终于进来了")

}

//MARK：
function programa () {
    // 1.Number 字面量可以是整数或者小数 3.14
    // 2.String 字面量可以使用单引号或者双引号括起来 '1234' "5678hello"
    // 3.表达式字面量 5+1 10*10
    // 4.数组字面量 [40,50,100]
    // 5.对象字面量 {first:"jane",last:"123",age:25}
    // 6.函数字面量 function myFunc (a,b) {return a*b;}
    /*
    * 7.变量 使用 var 来定义，= 为变量赋值；字面量赋值后，变量具有对应的数据类型。
    一个好的编程习惯是，在代码开始处，统一对需要的变量进行声明。
    您可以在一条语句中声明很多变量。该语句以 var 开头，并使用逗号分隔变量即可;声明也可横跨多行;
    但是多个变量不可以同时赋同一个值。

    常量 使用const 声明;与swift里面的let同理。
    */
    var x,y;
    // 声明的值没有赋值，值实际上是undefined；
    x = 5;
    y = 'hello';
    var x;
    // 重新声明变量，该变量的值不变，还是原来的 5;后声明的，声明不会重新生成，但是赋的值会覆盖之前的。

    const  a = 1;
    // a = 2; 报错
    // const a = 3; 报错

    // 8.算数运算符 + 赋值运算符(= + - * /) (== != > <)
    var zz = x + y * 2;
    /* 9.
        当编写 JavaScript 语句时，请留意是否关闭大小写切换键。
        函数 getElementById 与 getElementbyID 是不同的。
        同样，变量 myVariable 与 MyVariable 也是不同的。
        JavaScript 语句和 JavaScript 变量都对大小写敏感。

        JavaScript 使用 Unicode 字符集。Unicode 覆盖了所有的字符，包含标点等字符。

        用分号来结束语句是可选的。

        JavaScript 会忽略多余的空格。您可以向脚本添加空格，来提高其可读性。

     */
    /* 10.
    * 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
    * 引用数据类型：对象(Object)、数组(Array)、函数(Function)。
    * JavaScript 拥有动态类型。这意味着相同的变量可用作不同的类型：怎么说，有利有弊吧。
    * */
    var x;  //undefined
    var x = 5;
    var x = "jane"

    // 当您声明新变量时，可以使用关键词 "new" 来声明其类型：
    var carname = new String;
    var x =       new Number;
    var y =       new Boolean;
    var cars =    new Array;
    var person =  new Object;

    //JavaScript 只有一种数字类型。数字可以带小数点，也可以不带：
    var x1 = 666.00;
    var x2 = 6666;
    //科学计数法
    var y1 = 123e5; //12300000
    var y2 = 1234e-5    //0.01234

    //数组
    var cars = new Array(); //创建空数组
    cars[0] = "宝马";
    cars[1] = "本田";
    cars[2] = "奔驰";
    var hourse = new Array("矮房子","小区","小洋房","别墅");  //这是一个预定义的数组，在创建时初始化
    var names = [];  //创建空数组
    var names = ["jc","hx","gg"]; //推荐

    //对象(字典) 创建方式，下面有函数例子，看看
    var person = {firstname : "jc",lastname : "hx",age : 18}; //对象的创建,推荐
    // 取值
    var name = person.firstname;
    var aget = person["age"];

    var people = new object();
    people.name = 'hx';
    people.age = 16;
    people.car = "宝马";
    people.action = function() {}

    // PS : JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象。
    // 所以，就算变量定义的是数组格式，typeof 返回的数据类型还是 object。判断该对象是否为数组，使用 isArray 方法或者 使用 instanceof 操作符;

    // Undefined 这个值表示变量不含有值。可以通过将变量的值设置为 null 来清空变量。
    cars = null;

    //数字类型转字符串
    var a = 100;
    var b = a.toString();
    console.log(typeof(b));

    //字符串转int 和 float
    var str = "12345.30"
    var c = parseInt(str);
    var d = parseFloat(str);

    //PS : 要把任何值转换为布尔型数据，在值的前面增加两个 !! 感叹号即可，!!0 为 False，其余的均为 True。!!
}

//MARK：
// 以下两个方法，说明let 和var 的区别：let 声明的变量只在其声明的块或子块中可用;var声明的变量的作用域是整个封闭函数。
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x); //2
    }
    console.log(x); //2
}

function letTest() {
    let y = 3;
    if (true) {
        let y = 4;
        console.log(y); //4
    }
    console.log(y); //3
}

// Javascript声明变量的时候，虽然用var关键字声明和不用关键字声明，很多时候运行并没有问题，但是这两种方式还是有区别的。可以正常运行的代码并不代表是合适的代码。
// num1为全局变量，num2为window的一个属性
var num1 = 1;
num2 = 2;
// delete num1;  无法删除
// delete num2;  删除
function model(){
    var num1 = 1; // 本地变量
    num2 = 2;     // window的属性
    // 匿名函数
    (function(){
        var num = 1; // 本地变量
        num1 = 2; // 继承作用域（闭包）
        num3 = 3; // window的属性
    }())
}

//MARK：JS允许重复定义函数，同名函数，最后一个会覆盖之前的，与参数无关，没有重载概念。
function firtFunc() {
    console.log('测试第一个函数')
}
firtFunc();

function firtFunc(arg) {
    console.log(arg)
}
firtFunc('测试第二个函数，覆盖了第一个');

//MARK:实参个数如果比形参少，那么剩下的默认赋值为 undefined，如果实参传的比形参数量多，那么是全部都会被传进去的，只不过没有对应的形参可以引用（但可以用 arguments 来获取剩下的参数）。
function test(arg1) {
    for(var i=0; i<arguments.length; i++) {
        console.log(arguments[i]);
    }
}
test(1,2); //输出 1 2

//MARK：变量与函数重名的时候，变量生效
/*
* 这涉及到了变量和函数的预解析：
* 变量声明会被顶置，函数声明也会被顶置且比变量更先声明。
* 变量的声明和赋值语句一起写时，JS引擎在解析时，会将其拆成声明和赋值2部分，声明置顶，赋值保留在原来位置。
* 声明过的变量不会再重复声明。
* */
var a = 100;
function a() {
    return "function";
}
console.log(a);     //输出 100
// console.log(a());
/*
报错
Uncaught TypeError: a is not a function
    (anonymous function) @test.html:9
*/

//MARK：普通函数、函数对象(实际上是声明一个匿名函数，然后将该函数的 init 方法赋值给该变量。)
var a = 100; //注意这里是 同名变量的情况
var a = function() {
    return "我是一个匿名函数";
}
console.log(a);
/*
输出
function() {
    return "我是一个匿名函数"";
}
*/
console.log(a());
//输出 "我是一个匿名函数"

//MARK:函数与内部变量重名.(在 window 变量下，定义一个 key，它的名字为该函数名，值为该函数的地址。函数内部的 this 指向 window 对象。)
function a() {
    console.log(this);  //输出 window{...}
    this.a = 1;         //即 window.a = 1，此时window下的function a已经被该变量覆盖了。
    var a = 5;          //下面的这几个变量都是局部变量，仅在花括号范围内有效。
    a = 10;
    var v = "value"
    return "function";
}
console.log(a);         //输出 function a {...}
console.log(a());       //输出 "function"
console.log(a);         //输出 1
// console.log(v);
/*
输出
Uncaught ReferenceError: v is not defined
    (anonymous function) @ mycolor.html:15
*/

//MARK:对象的创建方式应用
function Demo(){
    var obj=new Object();
    obj.name="张思";
    obj.age=12;
    obj.firstF=function(){
    }
    obj.secondF=function(){
    }
    return obj;
}

var one=Demo();
// 调用输出
document.write(one.age);

function Demo(){
    this.name="张思";
    this.age=12;
    this.firstF=function(){
    }
    this.secondF=function(){
    }
}

var one=new Demo

// 调用输出
document.write(one.age);

