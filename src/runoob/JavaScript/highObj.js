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
        // person.name
        // person["name"]
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

    //String 字符串对象：用于处理已有的字符块
    //字符串中查找字符串
    var str = "haha nihao Wo Shi chenjian";
    var n = str.indexOf("chenjian");  //lastindexOf(从末尾开始找) ,没找到返回-1
    var matchstr = str.match("haha"); //返回haha，查找字符串中特定的字符，找到就返回这个字符，否则返回null
    var newstr = str.replace(matchstr,"heihei"); //replace() 方法在字符串中某些字符替换成另一些字符
    var bigstr = str.toUpperCase(); //文本转换为大写
    var litterstr = str.toLowerCase(); //文本转换为小写
    var arr = str.split(" "); //使用空格分隔 生成数组

    var newtxt = str.replace(/a/gi,'x'); //g代表全局替换，i代表忽略大小写

    // String.prototype.trim() 脱去不必要的空格


    //MARK : indexOf() 和 lastIndexOf()的使用区别：
    var str = 'xxa xxa xxax';

//不带参数
    var firstA1 = str.indexOf('a');
    firstA1 = firstA1 + 1;             //默认计算的位数实际是到a的前一位，所以+1才是a的所处位置

    var endA1 = str.lastIndexOf('a')
    endA1 = endA1 + 1;                 //同上

//带参数
    var firstA2 = str.indexOf('a',5);
    firstA2 = firstA2 + 1;             //默认计算的位数实际是到a的前一位，所以+1才是a的所处位置

    var endA2 = str.lastIndexOf('a',7)
    endA2 = endA2 + 1;                 //同上


    console.log('字符串总长度是>>>>>>>>>>' + str.length);

    console.log('第一个a字符，在总长度中的位置是>>>>>>>>>>' + firstA1);              //输出3
    console.log('最后一个a字符，在总长度中的位置是>>>>>>>>>>' + endA1);              //输出11


    console.log('字符串的前5位之后，第一个a在总长度中的位置是>>>>>>>>>>' + firstA2);  //输出7
    console.log('字符串的前7位之内，最后一个a在总长度中的位置是>>>>>>>>>>' + endA2);  //输出7

    /*
    * 1. indexOf('a', 5) 查找的是字符串前5位之后的第一个a
    * 2. lastIndexOf('a', 7) 查找的是字符串前7位之内的最后一个a
    * 3. 千万不要混淆把 lastIndexOf('a', 7) 理解成查找字符串倒数第7位中的a
    * 4. 空格也是一位数
    * 5. 带参数是为了定位，要找哪段字符串中的 a，找到这个 a 后，再从前往后数，计算并返回它在总字符串中的位置。
    * */
}

//MARK: 日期
function  dateTest() {
    //初始化日期对象
    var dateObj = new Date();
    dateObj = new Date(value);
    dateObj = new Date("October 13, 1975 11:13:00"); //Date(dateString);
    dateObj = new Date(79,5,24,11,33,0) //Date(year, month, day, hours, minutes, seconds, milliseconds);

    dateObj.setFullYear(2020,12,12);
    dateObj.setDate(dateObj.getDate()+5); //将日期设置为5天后的日期;如果增加天数会改变月份或者年份，那么日期对象会自动完成这种转换。真香

    var today = new Date();
    if (dateObj > today) { //日期比较
        alert("今天是2020.12.12之前的日子");
    } else  {
        alert("今天是2020.12.12之后的日子");
    }

    dateObj.getFullYear(); //获取年份
    dateObj.getTime();  //获取1970。1。1后的毫秒数
    dateObj.setFullYear(); //设置具体日期
    dateObj.toUTCString(); //当前日期转换为UTC字符串日期
    dateObj.getDay(); //返回星期几的index

    alert(new Date().format("yyyy年MM月dd日"));
    alert(new Date().format("MM/dd/yyyy"));
    alert(new Date().format("yyyyMMdd"));
    alert(new Date().format("yyyy-MM-dd hh:mm:ss"));
}

//数组 - 使用单独的变量来存储一系列的值
//数组：完整手册(https://www.runoob.com/jsref/jsref-obj-array.html)
function arrayTest() {
    //创建
    //1.常规
    var myCars = new Array();
    myCars[0] = "luhu";
    myCars[1] = "benchi";
    console.log(myCars[1]);
    //2.简洁
    myCars = new Array("baoma","volvo");
    console.log(myCars[1]);
    //3.字面
    myCars = ["Haha","Daoban","ENEN"];
    console.log(myCars[1]); //-- 变量 提升

    //访问 - 索引，只能根据索引访问，不能直接根据值访问，可以根据字符串数字来访问，会自动将字符串数字转换为数字值的
    var car = myCars[0];
    myCars[0] = "kdlk";

    //一个数组中可以有多种不同类型的对象

//todo 可以给数组自定义新方法，然后全局都可以用了吗？
    Array.prototype.myUcase=function(){
        for (i=0;i<this.length;i++){
            this[i]=this[i].toUpperCase();
        }
    }

    myCars.myUcase();
    for (i=0;i<myCars.length;i++){ //遍历1
        console.log(myCars[i]);
    }

    /*
    * 有的人说可以这么理解：
    * 数组是特殊的对象。对象的属性名是字符串类型的,数组可以看做属性名是数字类型的,这样就很好理解了。数组还针对数组的特性,对对象属性的布局做了优化。
    * 可以稍微这么理解，单丝不代表就是这样。
    * */

    //使用for ...in循环遍历对象的属性 遍历2
    for(var key in hash) {
        key //元素的下标名
        hash[key] //当前元素值
    }

    //遍历3 // of:每遍历一次数组指针向后移动一位, 并得到当前数组元素的值, 处理二维数组时极为方便
    for (let value of array) {
        console.log((value));
    }
    //遍历 - 剥洋葱理论

    // Js还为数组对象内置了多种迭代方法, 处理数组时极为方便
    myCars.forEach((value, index) => {
        //值、键 无返回值
    })

    myCars.map((value, index, array) => {
        //返回 新的键值对，map 统一封装一个数组返回
        return value + "test";
    })

    // 自动将字符串数字转换为数字值 来当下标索引访问
    var a = new Array();
    a['a'] = 1;
    a["100"] = 2;
    // a.length 101;
}

//布尔值 对象
function boolTest() {
    var myBoolean = new Boolean();
    //如果布尔对象 无初始值或其值为：0、-0、null、""、false、undefined、NaN、"false" 那么对象的值为false，否则为true

}

//Math（算数）对象：执行茶馆你就爱你的算数任务 https://www.runoob.com/jsref/jsref-obj-math.html
function MathTest() {
    //直接Math对象调用就行了，不需要创建相应的对象来调用 todo 为什么有的函数可以直接调用里面的变量方法，有的确实要新建一个对象才能调

    //生成随机数
    var rand = (min,max) => Math.round(Math.random()*(max-min))+min;


}


