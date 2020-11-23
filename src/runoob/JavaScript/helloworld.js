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
// num1为全局变量，num2为window的一个属性(如果您把值赋给尚未声明的变量，该变量将被自动作为 window 的一个属性.非严格模式下给未声明变量赋值创建的全局变量，是全局对象的可配置属性，可以删除。)
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


//MARK：扩展 --
//基本类型的值是存放在栈内存里的
function baseVar() {
    var E,F;
    E = "cj";
    F = E;
    console.log(E);//cj
    console.log(F);//cj
    E = "hx";
    console.log(E);//hx 改变E的值，不影响F的值
    console.log(F);//cj
}

//引用类型的值是存在堆内存中的对象<对象只有一个，公用这个对象的内存地址-指针>
function specialVar() {
    var H = {name : "chenjian"};
    var I = H ;
    H.name = "hanxu";
    console.log(I.name);
    I.age = 15; //对象也可以先创建，再添加属性和属性值
    console.log(H.age);
    var J = {
        name : "hanxu",
        age : 15
    };
    //H 和 I 是同一个内存地址；J是另外一个内存地址。
}

//MARK：对象 -- 在 JavaScript中，几乎所有的事物都是对象。
//对象也是一个变量，但对象可以包含多个值（多个变量）。
// 我们通常认为 "JavaScript 对象是键值对的容器"。键值对在 JavaScript 对象通常称为 对象属性。“键”必须为字符串，“值” 可以是 JavaScript 中包括 null 和 undefined 的任意数据类型。
//对象方法，函数作为对象的属性。
//javaScript对象中属性具有唯一性（这里的属性包括方法），如果有两个重复的属性，则以最后赋值为准。
var bird = {
    name : "Amy",
    age : 1,
    color : "white",
    skill : function () {
        console.log("Fly");
    },
    nickname : null,
    play : undefined
}

//MARK：函数 -- 是由事件驱动的或者当它被调用时执行的可重复使用的代码块。
// 在调用函数时，您可以向其传递值，这些值被称为参数。这些参数可以在函数中使用。您可以发送任意多的参数，由逗号 (,) 分隔：
//带有返回值的函数：在您仅仅希望退出函数时 ，也可使用 return 语句。返回值是可选的：
function myFunction(a,b)
{
    if (a>b)
    {
        return;
    }
    x=a+b
}

// ES6 新增箭头函数，定义函数时更加简洁、易读。
//使用箭头函数定义函数时可以省略 function关键字
const test1 = function () {

}

const text2 = (...params) => {

}

const text3 = param => {
    return param;
}


// MARK：作用域为可访问变量，对象，函数的集合。
// 在 JavaScript 中，对象和函数都时变量。
//局部变量：在 JavaScript 函数内部声明的变量（使用 var）是局部变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。
// 您可以在不同的函数中使用名称相同的局部变量，因为只有声明过该变量的函数才能识别出该变量。只要函数运行完毕，本地变量就会被删除。
// 全局变量：在函数外声明的变量是全局变量，网页上的所有脚本和函数都能访问它。页面关闭后被删除。
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
// abc
// abc
// abc
// 函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。

//MARK: HTML 事件是发生在 HTML 元素上的事情。当在 HTML 页面中使用 JavaScript 时， JavaScript 可以触发这些事件。HTML 事件可以是浏览器行为，也可以是用户行为。
// <some-HTML-element some-event='JavaScript 代码'>
// <some-HTML-element some-event="JavaScript 代码">
//实例1：<button onclick="getElementById('demo').innerHTML=Date()">现在的时间是?</button>
//实例2：<button onclick="this.innerHTML=Date()">现在的时间是?</button> 不推荐
//实例3：<button id="test" onclick="changeContent()">更换内容</button> 推荐

//MARK:字符串
var carname = "volvo";
// 使用索引位置来访问字符串中的每个字符:
var char = carname[2];
// 你可以在字符串中使用引号，字符串中的引号不要与字符串的引号相同:
var hello = "I'am chenjian,she is 'chenjiao'";
var hi = 'he is "hanxu"';
//也可以在字符串添加转义字符来使用引号：\' 单引号，\"双引号，\\反斜杠，\n换行，\r回车，\t tab制表符，\b 退格符，\f 换页符。
var heihei = "my name is \"chenjian\"";
//字符串对象 -- 不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用
var fname = "chen"; //typeof 返回string
var lname = new String("jian") //typeof 返回object

//原始值字符串，如 "John", 没有属性和方法(因为他们不是对象)。
// 原始值可以使用 JavaScript 的属性和方法，因为 JavaScript 在执行方法和属性时可以把原始值当作对象。

//对于string ,number基础数据类型比较：
// === 为绝对相等，即数据类型 与 值都必须相等。
// == 可为不同类型间比较； "转化成同一类型后的值" 看 "值" 是否相等。
//对于Array ,Object等高级类型，== 和 === 比较没有区别；
//比较 基础数据和高级数据，高级数据转为基础数据，进行"值"比较。
//     != 为 == 的非运算，!== 为 === 的非运算

//MARK：运算符
//+ 运算符
var xx = 5;
var yy = 5;
var xy = xx + yy; //10
var sx = "10";
var sy = "10";
var ss = sx + sy; //"1010"
var xs = xx + sx //"510" 如果把数字与字符串相加，结果将成为字符串！
var tx = 5 + 5 + "20"; //"1020"
var ts = "" + 5 + 5 + "20" ; //"5520"
var bx = true;
var bb = bx + 10;   //11
var bs = bx + "10"; //"110" 字符串与布尔值相加，布尔值转化成字符串。 ?? todo

//取模%运算的结果符号只与左边值的符号有关：
var zx = 7 % (-3); // 结果为 1
var zy = (-7) % 3; // 结果为 -1

//null 与数字相加， null 转化为0
// bool 类型与 null 类型进行累加时，视为其与整数类型累加处理。
var xz = null + 12; //12
var sz = null + "12"; //null12
var xa = null + bx; //1

//undefined 除了与字符串进行累加时有效（undefined 视为字符串"undefined"处理），其他情况皆返回 NaN。

//条件运算符 -- 三目运算符：
var resultx = (age < 18) ? "未成年" : "已成年";

// 取反! -- 首先把数据转化为布尔值，然后取反，结果为 true 或 false。
// 其他数据类型转换为布尔类型的规则: null、undefined、0、NaN、空字符串转换为false，其他转化为 true
var sa = "hello";
var ua = "";
console.log(!sa); //false
console.log(!ua); //true

// 逻辑与 && 如果运算的第一个操作数为true,则返回第二个操作数,反之则返回第一个操作数;
console.log(0 && "hehe"); //0
console.log(sa && 0); //0

// 逻辑或 || 如果运算的第一个操作数为 true,则返回第一个操作数,反之则返回第二个操作数

// switch 语句的使用，当两种情况相同时，可以只在第二种情况中写要执行的代码;
// switch 中 case的判断是===的判断，即数据类型和值的双重判断。判断条件可以是String 、Number、Boolean、char、枚举、null、undefined。

//循环:
function testLoop() {
    // for - 循环代码块一定的次数
    for (var i = 0;i < 5; i++) {
        console.log(i);
    }
    for (var j = 0,len = 8; j < len; j++) {
        console.log("for循环，初始化多个值" + j);
    }
    var k = 0, length = 10;
    for (;k < length; k ++) {
        console.log("for循环，初始化第一个参数省略" + k);
    }
    // 中间的条件，也可省略不写，但是在循环体里面要写break才会跳出循环；
    // 最后修改初始值，可以省略，放到循环体里取改值
    for (; k < length; ) {
        console.log("for循环，初始化第一个参数还有第三个自增操作，省略" + k);
        k ++ ;
    }

    // for/in - 循环遍历对象的属性、遍历数组
    var person = {name:"chenjian",pinyin:"cj",age:18};
    var totalname ;
    for (name in person) {
        totalname = totalname + " " + person[name];
        console.log(totalname);
    }

    var nums = [1,2,3,4,5];
    for (x in nums) {
        console.log(nums[x]); //数组索引
    }

    //for...of 是 ES6 新引入的特性。它既比传统的for循环简洁，同时弥补了forEach和for-in循环的短板。
    for (var value of nums) {
        console.log(value); //直接遍历的是数组里面的值
    }

    var myname = "chenjiannihao";
    for (let value of myname) { //遍历一个字符串
        console.log(value);
    }

    //循环一个带键值对的数组
    let map = new Map([["name","chenjian"],["xiaoname","jc"],[age,18]]);
    for (let [key,value] of map) {
        console.log(value);
    }
    for (let entry of map)) {
        console.log(entry); //打印键值对
    }

    // 循环一个 Set
    let iterable = new Set([1, 1, 2, 2, 3, 3]);

    for (let value of iterable) {
        console.log(value); //打印去重了数据？ todo
    }

    // 循环一个 DOM collection todo

}


// 我们可循环一个生成器(generators): todo
function* fibonacci() { // a generator function
    let [prev, curr] = [0, 1];
    while (true) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    console.log(n);
    // truncate the sequence at 1000
    if (n >= 1000) {
        break;
    }
}


//         while - 当指定的条件为 true 时循环指定的代码块
// do/while - 同样当指定的条件为 true 时循环指定的代码块

