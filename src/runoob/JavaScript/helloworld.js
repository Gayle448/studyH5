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
    const  a = 1;
    // a = 2; 报错
    // const a = 3; 报错

    // 重新声明变量，该变量的值不变，还是原来的 5;后声明的，声明不会重新生成，但是赋的值会覆盖之前的。
    // 在js中，函数及变量的声明都将被提升到函数的最顶部；变量可以先使用 后声明。
    // *变量提升*：函数声明和变量声明总是会被解释器悄悄地被"提升"到方法体的最顶部。（先用，后声明，但是声明的同时初始化赋值，就不能提升了-意思不能先使用，后初始化）
    // 最好还是，统一在头部把要用到的变量都声明了，后面再用，省的后面出问题。预编译过程会有变量提升和函数提升。

    /*例子1：
    * a=5;
    show();
    var a;
    function show(){};
    *执行顺序：
    function show(){};
    var a;
    a=5;
    show()
    * 例子2：
    var getName=function(){
        console.log(2);
    }
    function getName(){
        console.log(1);
    }
    getName();

* 执行顺序：（使用匿名函数的方式不存在函数提升，因为函数名称使用变量表示的，只存在变量提升。）（函数提升优先，虽然函数声明和变量声明都会被提升，但是函数会首先被提升，然后才是变量。）
    //函数、变量声明提升后
    function getName(){    //函数声明提升到顶部
        console.log(1);
    }
    var getName;    //变量声明提升
    getName = function(){    //变量赋值依然保留在原来的位置
        console.log(2);
    }
    getName();    // 最终输出：2
    * */
    //这里还有个复杂的例子，待理解 todo 函数提升，有人说返回值会提升？啥意思
    function jsFun6(){  //函数声明和函数表达式的区别

        test1();//函数声明提升，在执行代码之前会先读取函数声明，不会报错
        function test1(){//函数声明方式创建函数
            alert("测试1");
        }

        //test2();报错，函数还不存在
        console.log(test2)//不会报错，变量提升只是提升变量的声明，并不会把赋值也提升上来，输出undefined
        var test2=function(){
            alert("测试2");
        };//使用 函数表达式 创建一个匿名函数(实际是以变量test3命名的函数)
        test2();//不会报错，以创建函数

        var test3=function(){
            alert("测试3");
        }();//加了括号立即执行

        var test4 = 12;// ！注意看，一旦变量被赋值后，将会输出变量
        //函数提升优先级高于变量提升，所以函数先提升，然后变量提升覆盖之前的函数声明，表
        //现为变量
        function test4() {
            alert("测试4");
        }
        console.log(test4); //12

        var test5="test5_1";
        (function(){
            //js中的变量搜索顺序：找变量时，先找局部变量，如果没有局部变量；再找全局变量。
            alert(test5);//此时的test5为局部变量的提升，undefined
            var test5="test5_2"; //这里是初始化，不是单纯声明，所以不会提升。
        })();

    }

    //MARK：严格模式：使用use strict ，值在严格条件下执行代码，这个模式下，你不能使用未声明的变量。在函数内部声明只在函数内使用严格模式。
    "use strict";//只允许出现在脚本或函数的开头。
    /*1.不允许使用未声明的变量;
    2.不允许删除变量或对象;
    3.不允许删除函数;
    4.不允许变量重名;
    5.不允许使用八进制;
    6.不允许使用转义字符;
    7.不允许对只读属性赋值;
    8.不允许对一个使用getter方法读取的属性进行赋值;
    9.不允许删除一个不允许删除的属性;
    10.变量名不能使用 "eval" 字符串;
    11.变量名不能使用 "arguments" 字符串;
    12.不允许使用以下这种语句;
    13.由于一些安全原因，在作用域 eval() 创建的变量不能被调用
    14.禁止this关键字指向全局对象;
    15.变量不能命名：implements、interface、let、package、private、protected、public、static、yield。
    */

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
//+ 运算符 + 数据类型转换：https://www.runoob.com/js/js-type-conversion.html
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
var sa = "5";   //字符串
var sb = + sa;  // sb是一个数字 ,注意和上面不同
sa = "chenjian";
sb = + sa;  //sb 还是一个数字(NaN)
var xb = 5 + null;  //5
var sc = "5" + null; //"5null"
var xc = "5" -1;    //4

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
// 定义了数组后对数组进行赋值，中间如有某些下标未被使用（即未被赋值），在遍历的时候，采用一般的 for 循环和 for...in 循环得到的结果不同。
// for...in 循环会自动跳过那些没被赋值的元素，而 for 循环则不会，它会显示出 undefined。
/*
* for : 比较适合遍历数组,字符串等等。
* for in : 比较适合遍历对象，遍历对象时使用这个再合适不过了。
* while : while 的话，与 for 的使用场景差不多。唯一不同的是，遍历的条件必须满足。
* do while : 至少执行一边的循环，遍历数组和字符串也是很方便。
* */

//break 语句用于跳出循环。
// continue 用于跳过循环中的一个迭代。
// 正如您在 switch 语句那一章中看到的，可以对 JavaScript 语句进行标记。
// biaoji :
// statements

// continue 语句（带有或不带标签引用）只能用在循环中。
// break 语句（不带标签引用），只能用在循环或 switch 中。
// break biaoji; 可用于跳出任何js代码块。
//标签 实例：
outerloop:
    for (var i = 0; i < 10; i++)
    {
        innerloop:
            for (var j = 0; j < 10; j++)
            {
                if (j > 3)
                {
                    break;
                }
                if (i == 2)
                {
                    break innerloop;
                }
                if (i == 4)
                {
                    break outerloop;
                }
                document.write("i=" + i + " j=" + j + "\n");
            }
    }

//MARK:typeof，null，undefined
//使用typeof 操作符来检测变量的 数据类型 ；如果对象是 JavaScript Array 或 JavaScript Date ，我们就无法通过 typeof 来判断他们的类型，因为都是 返回 object。
typeof "jone" //string
typeof 3 //number
typeof false // boolean
typeof NaN // number
typeof  [1,2,3,4] //数组是一种特殊的对象类型。 因此 typeof [1,2,3,4] 返回 object
typeof  {name:'chenjian',age:11} //object
typeof new Date() //返回object
typeof function () {} //返回function
typeof null //返回object
typeof  myCar //undefined myCar没有声明的时候


// null - 是一个只有一个值的特殊类型，表示一个空对象引用，可以使用null来清空对象。使用typeof检测null，返回的object.(主动释放一个变量引用的对象，表示一个变量不再指向任何对象地址。)
// undefined - 是一个没有设置值的变量，typeof 一个没有值的变量会返回undefined，任何变量都可以使用undefined来清空。(是所有没有赋值变量的默认值，自动赋值。)
// if (typeof a!="undefined"){//判断一个变量是否存在}
var person = null; //值为null(空) 但是类型为对象object。
var person = undefined; //值为undefined，类型为undefined。
//这两个东东，值都为空，但是类型不一样。
null === undefined //false
num1 == undefined //true


//MARK:Number() 转换为数字， String() 转换为字符串， Boolean() 转换为布尔值。
// 6种数据类型：string、number、boolean、object、function、symbol；
// 3种对象类型：Object 、Date 、Array；
// 2个不包含任何值的数据类型: null 、undefined。

//constructor属性：返回所有 JavaScript 变量的构造函数.
/*
* "John".constructor                 // 返回函数 String()  { [native code] }
*(3.14).constructor                 // 返回函数 Number()  { [native code] }
*false.constructor                  // 返回函数 Boolean() { [native code] }
*   [1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
*{name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
*new Date().constructor             // 返回函数 Date()    { [native code] }
*function () {}.constructor         // 返回函数 Function(){ [native code] }
* */
// 可以使用constructor属性来查看对象是否为数组 (包含字符串 "Array");
// 使用 constructor 属性来查看对象是否为日期 (包含字符串 "Date");
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

function  changeType() {
    // 所以，就算变量定义的是数组格式，typeof 返回的数据类型还是 object。判断该对象是否为数组，使用 isArray 方法或者 使用 instanceof 操作符;

    // Undefined 这个值表示变量不含有值。可以通过将变量的值设置为 null 来清空变量。
    cars = null;

    //数字类型转字符串
    var a = 100;
    var b = a.toString(); // toExponential() 转换为指数计数法； toFixed ,数字转字符串，制定小数点位数；toPrecision() 把数字格式化为指定长度。
    b = String(a+3);
    console.log(typeof(b));

    //bool值转换为字符串
    var x = true;
    b = x.toString();
    b = String(x);

    //将日期转换为字符串 ;更多 date方法请见：https://www.runoob.com/jsref/jsref-obj-date.html
    b = Date(); // 返回 Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)
    b = String(new Date());  // 返回 Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)
    b = (new Date()).toString(); // 返回 Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)

    //字符串转int 和 float
    var str = "12345.30"
    var c = parseInt(str);
    var d = parseFloat(str);

    //bool 转为数字
    var e = Number(false);
    //PS : 要把任何值转换为布尔型数据，在值的前面增加两个 !! 感叹号即可，!!0 为 False，其余的均为 True。!!

    //日期转为数字
    var f = new Date();
    var g = Number(f);

    //null 转数字为0；undefined 转数字为NaN；都是false；
    /*
    NaN 是一个特殊的数值，NaN 即非数值（Not a Number），这个数值用于本来要返回数值的操作数未返回数值的情况。
    NaN 与任何值都不相等，包括 NaN 本身。
    可以通过 isNaN() 方法来判断某个数值是否是NaN这个特殊的数，使用 isNaN() 方法会将传入的数值如果是非数值的会将其自动转换成数值类型，若能转换成数值类型，
    那么这个函数返回 false，若不能转换成数值类型，则这个数就是 NaN，即返回 true。
    */

    // document.getElementById("demo").innerHTML = myVar;
    // 当你尝试输出一个对象或一个变量时 JavaScript 会自动调用变量的 toString() 方法。

    //instanceof
    var h = [1,2,3];
    if (h instanceof Array) {
        //h 是一个数组
    }
}

//正则表达式:使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。可用于所有文本搜索和文本替换的操作。
function regexTest() {
    //语法
    // /正则表达式主体(用于检索)/修饰符(可选，i 搜索不区分大小写，g 执行全局匹配，m 执行多行匹配)
    /*使用字符串方法:
    search() 方法：用于检索字符串中指定的子字符串，或者检索与正则表达式相匹配的的子字符串，并返回子串的起始位置。
    replace（）方法：用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
    */
    var str = "hello runoob !";
    var s = str.search(/runoob/i);   //6
    s = str.search("runoob"); //6
    var rstr = str.replace(/runoob/i,"chenjian"); //把runoob 替换成chenjian,这里每调用一次只会替换第一个(不区分大小写)
    rstr = str.replace("runoob","chenjain");

    /*
    * 正则表达式模式：https://www.runoob.com/js/js-regexp.html
    * 表达式：
    * [abc] 查找方括号之间的任何字符；
    * [0-9] 查找任何0-9的数字；
    * [x|y] 查找任何以|分隔的选项；
    * 元字符：
    * \d 查找数字
    * \s 查找空白字符
    * \b 匹配单词边界
    * \uxxxx 查找以十六进制xxxx规定的Unicode字符
    * 量词：
    * n+ 匹配任何包含至少一个n 的字符串
    * n*撇配任何包含0个或者多个n 的字符串
    * n? 匹配任何包含0个或者1个n的字符串
    *
    * RegExp 对象 ：十一额预定义了属性和方法的正则表达式对象；
    * test() 方法是一个正则表达式方法。用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。
    * exec() 方法是一个正则表达式方法。用于检索字符串中国呢的正则表达式的匹配。结果返回一个数组，没有则返回null。 ?? todo ,没看到数组
    * 常用正则示例：
    * /^[a-zA-Z]+$/ (字符串是否全部为字母)
    * /^\w+$/ 是否为数字、字母、下划线组成
    * /^\d+$/ 是否全部为数字
    * /^\d+\.\d+$/ 是否带有小数
    * /^[\u4E00-\u9FA5]{2,4}$/ 是否中文名称组成
    * /^[0-9]{8}$/ 是否全由8位数字组成
    * /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/ 校验电话码格式；但我敢肯定，166的号码不被认可,因为第2位必须包括3584中的一个
    * /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/ 校验邮件是否合法 ?:\. 是啥意思 todo
    *  */
    var ba = /e/.test("hahae") //true
    var bb = "e"; //1
    bb.test.test("hahae") //true
    bb = new RegExp(/e/); //2
    bb = /e/; //3
    var bc = /e/.exec(hahaehehehe);
}

//js 错误throw、try和catch
function tryCatchTest() {
    /*
    * try - 测试代码块的错误
    * catch - 处理错误
    * throw - 创建自定义错误，在try里面出错时候，可以扔一个自定义错误过来(可以是 JavaScript 字符串、数字、逻辑值或对象。)
    * finaaly - 无论是否触发一场，都会执行
    *
    * JavaScript 将抛出一个错误:当事情出问题时，JavaScript 引擎通常会停止，并生成一个错误消息。
    *
    * */

    // try {
    // ...    //异常的抛出
    // } catch(e) {
    // ...    //异常的捕获与处理
    // } finally {
    // ...    //结束处理
    // }

    //调试方式：
    //1。打印
    console.log("打印日志信息");
    //2。在调试窗口中可以设置js断点
    //3。使用debugger:用于停止执行js，并调用调试函数，与在调试工具中设置断点效果一样，但是没有调试可用(没查看浏览器元素)，该语句将无法工作，可继续执行。

}

//Mark：js使用误区
/*1.if条件语句（里面要用比较运算符== 或者 === 不能使用赋值运算符=
2.比较运算符 不要忽略数据类型；switch是按照===来的；
3.加法是两个数字相加；连接是两个字符串连接；都用+；字符串+数字上面有示例看看。
4.JavaScript 中的所有数据都是以 64 位浮点型数据(float) 来存储;对浮点型数据的精确度都很难确定;
var x = 0.1;
var y = 0.2;
var z = x + y            // z 的结果为 0.30000000000000004
if (z == 0.3)            // 返回 false
5.JavaScript 允许我们在字符串中使用断行语句;在字符串中直接使用回车换行是会报错的;字符串断行需要使用反斜杠(\).
6.js中return那句后面自带; 其他没有；的不完整的语句，会自动去取第二行语句有；就结束,没有;会自动断句拼接会出问题；所以最好养成写分号的习惯.
7.JavaScript 不支持使用名字来索引数组，只允许使用数字索引.如果你使用名字作为索引，当访问数组时，JavaScript 会把数组重新定义为标准对象<对象 使用 名字作为索引>。
8.定义数组元素，最后不能添加逗号;
9.定义对象，最后不能添加逗号;
10.null 用于对象, undefined 用于变量，属性和方法。对象只有被定义才有可能为 null，否则为 undefined。
检测对象是否已定义：if (typeof myObj !== "undefined" && myObj !== null)
11.在每个代码块中 JavaScript 不会创建一个新的作用域，一般各个代码块的作用域都是全局的。(但是要是var声明的变量吧？?)
for (var i = 0; i < 10; i++) {
    // some code
}
return i;
*/