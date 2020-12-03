/*
* JS 中所有事物都是对象：字符串，数值，数组，函数。。。
* 对象只是带有属性和方法的特殊数据类型。
* 属性 是对象的相关的值，访问对象属性的语法是：objectname.propertyName
* 方法 是能够在对象上执行的动作，语法：objectname.menthodName()
* 创建并自定义对象(其实就是一个name:value的集合)：
* 1.使用object定义并创建对象的实例；
* 在JS中，几乎所有的对象都是 object类型的实例，都从object.prototype 继承属性和方法；
*
* new Object([value]);    Object 构造函数，会根据给定的参数创建对象，具体有以下情况：
* 如果给定值是 null 或 undefined，将会创建并返回一个空对象。
* 如果传进去的是一个基本类型的值，则会构造其包装类型的对象。
* 如果传进去的是引用类型的值，仍然会返回这个值，经他们复制的变量保有和源对象相同的引用地址。
* 当以非构造函数形式被调用时，Object 的行为等同于 new Object()。打括号里创建键值对。

* 2.使用函数来定义对象，然后创建新的对象实例。
*
* JS是面向对象的语言，但是JS不实用类，不会创建类，也不会通过类来创建对象，这和其他面向对象的语言有点不一样。
* JS是基于prototype，而不是基于类的。注意⚠️
* JS 的对象是可变的，是通过引用来传递的，把对象赋给一个新的变量，不会创建副本，只是引用。
*
* 所有的JS对象都会从一个prototype(原型对象)中继承属性和方法。
* Date对象 从Date.prototype继承；
* Array对象 从 Array.prototype继承；
* Person 对象从 Person.prototype继承。
* 所有JS中的对象，都是位于原型链顶端的Object的实例。todo 感觉就是类似 类的继承
* JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，
* 还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。
* 使用prototype 属性可以给 对象的构造函数添加新的属性和方法。
*
* */

//对象讲解
function objTest() {
    //1.使用Object 创建对象实例：
    var a = new Object(true); //相当于 a = new Boolean(true);

    person = new Object();
    person.name = "chen";
    person.age = 19;

    person = {name:"jian",age:12};

    //2.使用对象构造器-函数 构造对象：
    function person(name,age) {
        this.name = name;
        this.age = age;
    }

    //创建新的对象实例
    me = new person("chenjian",12);
    //直接添加新属性 todo 这是错误的，看后面，想新增属性只能通过那个prototype原型来搞，这里应该是只给属性赋值，以更新属性
    me.lastname = "haha";

    //把方法添加到JS对象，方法只不过是附加在对象上的函数
    //在构造器函数内部定义对象的方：
    function people(name,age) {
        this.name = name;
        this.age = age;
        this.changeName = changename;
        function changename(newname) {
            this.name = newname;
        };
        //是不是相当于：
        this.changeAge = function (age) {
            this.age = age;
        };
    }

    //使用for ...in循环遍历对象的属性
    for (p in person) {
        var name = person(p); //p是属性名，根据属性名找值
        console.log(name);
    }

    //对象 - 可变 - 引用
    var haha = me;
    haha.age = 1; //me对象的值会跟着变，其实指向同一个对象。

    //一个已经存在的对象构造器 中不能添加新的属性/方法。可使用prototype添加
    person.prototype.hair = "hair";
    person.prototype.haha = function () {
      return '新增方法';
    };


    //Mark:下面是别人的笔记：
    //通常使用构造器（函数体）定义属性，使用原型对象（prototype）定义方法。
    // 如此，构造器只包含属性定义，而方法则分装在不同的代码块，使代码更具可读性：
// 构造器内定义属性
    function Fun(a, b) {
        this.a = a;
        this.b = b;
    }

// 原型属性定义方法
    Fun.prototype.c = function() {
        return this.a + this.b;
    }

// etc... 注意，千万不要使用字面量方式来定义属性和方法，否则原有属性和方法会被重写：

function Fn() {};

// 定义属性
    Fn.prototype.a = 1;
    Fn.prototype.b = 2;

// 字面量定义方法，原型被重写，原有属性和方法被更新
    Fn.prototype = {
        c : function() {
            return this.a + this.b;
        }
    }

    var foo = new Fn();
    foo.c();  // NaN
    foo.a;  // undefined
    foo.b;  // undefined
}

function showObject() {
    //Number 对象 JS只有一种数字类型；所有JS数字均为64位；整数最多15位，小数最大位数17；浮点运算不总是正确，不推荐直接运算。
    //如果前缀为0，则JS会把数值解释为八进制，如果前缀巍峨0x，则解释为十六进制。所以要注意数字前面不要写0；默认十进制。
    var numbertest =12;
    numbertest.toString(16); //返回十六进制

    //当数字运算结果超过了JS所能表示的数字上线（溢出），结果为无穷infinity或者负无穷大-infinity
    //NaN - 非数字值，特殊值，表示某个值不是数字
    isNaN(numbertest); //返回false,判断某个值是否是NaN值
    var x = 1/0;
    isNaN(x); //返回false 除以0，是一个无穷大，是一个数字，所以false

    //数字可以是数字或者对象
    var y = 12;
    var z = new  Number(12);
    typeof (y); //返回Number 数字
    typeof (z); //返回Object
    if (y == z) {} // false ，数据类型不一致

    //Number对象 是有属性和方法的，见：https://www.runoob.com/js/js-obj-number.html
}