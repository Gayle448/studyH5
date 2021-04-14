## TypeScript
* TypeScript 是 JS 的一个超集，支持ES6标准
* TypeScript 设计目标是开发大型应用，可编译成纯JS，编译出来的JS可以运行在任何浏览器

### JavaScript 和 TypeScript 的区别：
- TypeScript 是 JS 的超集，扩展了JS的语法，JS可与TS一起工作；
- TS 可处理已有的JS，并只对其中的TS代码进行编译。

### 使用记录：
* 安装npm 
> 1. 在终端 使用命令：brew install node 
> 2. 在官网下载.pkg包 直接安装
* 安装TypeScript
> 在终端 使用命令： sudo npm install -g typescript
* 将TS 转换成JS
> 1. cd 到同一个文件夹，在终端 使用命令：tsc helloworldForTS.ts
> 2. 在同文件夹下会生成：helloworldForTS.js 文件
> 3. node helloworldForTS.js，校验js文件输出

### 基本语法
TypeScript 程序由以下几部分组成：
* 模块
* 函数
* 变量
* 语句和表达式
* 注释

--------

基本知识
> TS 区分大小写
> 分号是可选的
> 单行注释与多行注释和JS一样
> TS 是一种面向对象的编程语言：对象、类、方法
```typescript
//类 -- 整体而言就像是js和swift的结合体
class girl {
    //方法
  name():void{
      console.log("chenjian")
  }
}
//对象
var obj = new girl();
//对象调用方法
obj.name(); 
```
### Any -- 数据类型常用3种情况
> 变量的值会改变时，在编译阶段可跳过类型检查，示例：
```typescript
let x : any = 1; //数字类型
x = '我是jc'; //字符类型
x = false; //bool类型
```
> 改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查，示例: todo ???
```typescript
let y : any = 5;
y.ifIteExites(); // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
y.toFixed();  // 正确
```
> 定义存储各种数据类型的数组，示例：
```typescript
let arrList : any[] = [1,false,'fine'];
arrList[1] = 100;
```
### never 类型
> 其他类型的子类型，代表不会出现的值。声明为never类型的变量只能被neverr类型所赋值，在函数中它通常表现为抛出一场或无法执行到终止点，示例：
```typescript
let x: never;
let y: number;

// 运行错误，数字类型不能转为 never 类型
x = 123;

// 运行正确，never 类型可以赋值给 never类型
x = (()=>{ throw new Error('exception')})();

// 运行正确，never 类型可以赋值给 数字类型
y = (()=>{ throw new Error('exception')})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {}
}
```
--------

### 变量声明
> 变量是一种使用方便的占位符，用于引用计算机内存地址。我们可以把变量看作存储数据的容器。
> TS 变量命名规则：
> * 可以包含数字和字母
> * 除了下划线和美元符号外，不能包含其他特殊字符，包括空格
> * 不能以数字开头

变量使用前必须声明，可以用var来声明。（JS有变量提升用法）
四种声明方式：
```typescript
// var [变量名] : [类型] = 值； ⚠️变量不要使用name 作为名字，否则会与DOM中window的name属性重名。
var sname : string = "chenjian";

// var [变量名] : [类型] ; 没有初始值，值为undefined；
var age : number;

//var [变量名] = 值； (类型推断) 值默认是任意类型，一旦赋值了就不能变了。
var hair = "red";

//var [变量名]; 没有声明类型和初始值，类型为任意，初始值为undefined；
var school;

//TS 是强类型，如果将不同类型赋值给变量会编译错误：
var num : number = "jc";
```

### 类型断言
> 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。编译时语法。不是类型转换（运行时）。
> 格式:
> <类型>值
> 值 as 类型
> 示例：
```typescript
var str = '1' 
var str2:number = <number> <any> str   //str、str2 是 string 类型
console.log(str2)
```

### 变量作用域
> 指定了变量定义的位置，程序中变量的可用性由变量作用域决定。
> * **全局作用域** − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
> * **类作用域** − 这个变量也可以称为**字段**。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
> * **局部作用域** − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
```typescript
var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量
   
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)
```
翻译成JS，注意看区别：
```javascript
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var obj = new Numbers();
console.log("实例变量: " + obj.num_val);
```

--------

### 位运算符
> & 按位与，x = 5 & 1 = 0101 & 0001 = 0001 = 1
> | 按位或，x = 5 | 1 = 0101 | 0001 = 0101 = 5
> ~ 取反，x = ~5 = ~0101 = 1010 = 10
> ^ 异或，x = 5 ^ 1 = 0101 ^ 0001 = 0100 = 4
> << 左移，x = 5 << 1 = 0101 << 1 = 1010 = 10
> >> 右移，x = 5 >> 1 = 0101 >> 1 = 0010 = 2
> >>> 无符号右移，x = 2 >>> 1 = 0010 >>> 1 = 0001 = 1 
> * 思考：有符号和无符号的区别；对于有符号整数，每一次右移操作，高位补充的是1；对于无符号整数，每一次右移操作，高位补充的则是0；是这样吗？

### 类型运算符
> typeof 是一元运算符，返回操作数的数据类型 typeof num 
> instanceof 判断对象是否为指定的类型.如，对象实例是否是这个类的。

### 负号运算符
```typescript
var x : number = 4;
var y = -4;
console.log(y); //-4
```

### 字符串运算符：连接运算符(+) 可以拼接两个字符串 (同JS一样)
```typescript
var msg : string = "chenjian" + "hello" ;
console.log(msg);
```

--------

### switch...case 语句
> expression 是一个常量表达式，和case（常量或字面量） 必须是同一个数据类型，。遇到break才终止，default case 中的break不是必须的。
```typescript
var expresion = 2;
switch (expresion) {
    case 1 :
        console.log(1);
        break;
        case 2 : 
            console.log(2);
            break;
            default :
                console.log("deault");
} 
```
### 循环，TS 除了支持 for() 和 for in循环，还支持这几种循环
* for...of ES6中引进， 允许遍历数组、字符串、映射maps，集合sets，等；例子：
```typescript
let someArray = [1,"chenjian",true];
for (let entry of someArray) {
    console.log(entry);
}
```
* forEach 继承的JS的用法
```typescript
let arr = [4,5,6];
arr.forEach((val,idx,array) => {
    //看起来有点麻烦啊，有点像swift的闭包
    //val:当前值
    //idx:当前idex
    //array:Array
});
```
* every 继承的JS的用法
```typescript
let arr = [4,5,6];
arr.every((val,idx,array) => {
    //看起来有点麻烦啊，有点像swift的闭包
    //val:当前值
    //idx:当前idex
    //array:Array
    return true; // true 继续循环，false 停止循环
});

//还有some 循环，也是继承的JS的用法;见下面数组用法。
```
* break 用于停止当前整个循环，执行循环的下一个语句；continue 用于停止本次循环。

### 无限循环
```typescript
for(;;) {
    //这段代码会无限循环
}

while (true) {
    //这段代码会无限循环
} 
```

--------

### 函数：是一组一起执行一个任务的语句
```typescript
function fname():string {
  //函数定义
  console.log("调用函数");
  return "hello";
}

function caller() {
  var msg = fname(); //调用者
  console.log(msg);
}

function add(x : number,y : number) {
  return x + y;
}
//TS和JS的唯一区别大概就是是否指定返回值类型和参数类型吧。

//可选参数 -- 是只可传可不传，与参数类型没声明不一样
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

//也可以，不声明参数类型，那参数应该就是可选类型
function test(x,y) {
  console.log(x);
}
 
let result1 = buildName("Bob");  // 正确
//let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
let result3 = buildName("Bob", "Adams");  // 正确
//可选参数必须跟在必需参数后面。 如果上例我们想让 firstName 是可选的，lastName 必选，那么就要调整它们的位置，把 firstName 放在后面。
//如果都是可选参数就没关系。

//默认 参数 
function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("计算结果: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)

//todo 可选参数和默认参数JS有吗？

//剩余参数 -- 这个很高级吗？为什么不直接传一个数组。JS更猛，你想怎么传传多少随你，反正我通过argument 数组去取就是了。
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("和为：",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)
```
### 匿名函数（就是JS里面的方法吧）
```typescript
var msg = function() { 
    return "hello world";  
} 
console.log(msg())

//匿名函数自调用 同JS一样
(function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()
 
 //构造函数 同JS一样
 var myFunction = new Function("a", "b", "return a * b"); 
 var x = myFunction(4, 3); 
 console.log(x);
 
 //递归函数
 function factorial(number) {
     if (number <= 0) {         // 停止执行
         return 1; 
     } else {     
         return (number * factorial(number - 1));     // 调用自身
     } 
 }; 
 console.log(factorial(6));      // 输出 720
 
 //Lambda 函数;箭头函数，表达式语法比函数表达式更短，不需要function字段和大括号（只有一个语句时可省略，多语句要保留）. todo 似乎JS没有，注意上面forEach循环有用到
 var foo = (x:number)=>10 + x 
 console.log(foo(100))      //输出结果为 110
 
 //单个可选参数都不用括号
 var display = x => console.log(x);
 display(12);
 
 //无参数是写空括号
 var disp = () => console.log("哈哈");
 
```
### 函数重载：重载是方法名字相同，而 参数 不同，返回类型可以相同也可以不同。 
todo JS 似乎没有这个概念，随意性很强，声明一个函数，参数随便你怎么传。。。
> 如果参数类型不同，则参数类型应设置为 any。
> 参数数量不同你可以将不同的参数设置为可选。

--------

### 特殊数据类型
* TypeScript 与 JavaScript 类似，支持 Number 对象。Number 对象是原始数值的包装对象。
* String 对象用于处理文本（字符串）。
* Array 数组对象是使用单独的变量名来存储一系列的值。
```typescript
var numlist:number[] = [2,4,6,8]

//构造函数
var arr_names:number[] = new Array(4)  
 
for(var i = 0; i<arr_names.length; i++) { 
        arr_names[i] = i * 2 
        console.log(arr_names[i]) 
}

//数组解构
var arr:number[] = [12,13] 
var[x,y] = arr // 将数组的两个元素赋值给变量 x 和 y
console.log(x) 
console.log(y)

//多维数组：
var multi:number[][] = [[1,2,3],[23,24,25]]  

//作为参数传参
var sites:string[] = new Array("Google","Runoob","Taobao","Facebook") 
 
function disp(arr_sites:string[]) {
        for(var i = 0;i<arr_sites.length;i++) { 
                console.log(arr_sites[i]) 
        }  
}  
disp(sites);

//作为返回值
function disp():string[] { 
        return new Array("Google", "Runoob", "Taobao", "Facebook");
} 
 
var sites:string[] = disp() 
for(var i in sites) { 
        console.log(sites[i]) 
}
```
常用方法：
> concat(); 连接多个数组，组成一个，数据类型可不一样。
> every(); 检测数值元素的每个元素是否都符合条件。
```typescript
function isBigEnough(element, index, array) { 
        return (element >= 10); 
} 
        
var passed = [12, 5, 8, 130, 44].every(isBigEnough); 
console.log("Test Value : " + passed ); // false
```
> filter(); 检测数值元素，并返回符合条件所有元素的数组。把上面的例子改成filter
> forEach(); 数组每个元素都执行一次回调函数。
> indexOf(); 搜索数组中的元素，并返回它所在的位置。如果搜索不到，返回值 -1，代表没有此项。
> join(); 把数组的所有元素放入一个字符串。
> lastIndexOf(); 返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
> map(); 通过指定函数处理数组的每个元素，并返回处理后的数组。
```typescript
var numbers = [1, 4, 9]; 
var roots = numbers.map(Math.sqrt); 
console.log("roots is : " + roots );  // 1,2,3
```
> pop(); 删除数组的最后一个元素并返回删除的元素。
> push(); 向数组的末尾添加一个或更多元素，并返回新的长度。
> reduce(); 将数组元素计算为一个值（从左到右）。
```typescript
var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
console.log("total is : " + total );  // 6 todo 待理解为啥要写这个function
```
> reduceRight(); 将数组元素计算为一个值（从右到左）。
> reverse(); 反转数组的元素顺序。  
> shift(); 删除并返回数组的第一个元素。
> slice(1,2); 选取数组的的一部分，并返回一个新数组。
> some(); 检测数组元素中是否有元素符合指定条件。
```typescript
function isBigEnough(element, index, array) { 
   return (element >= 10); 
          
} 
var retval = [2, 5, 8, 1, 4].some(isBigEnough);
console.log("Returned value is : " + retval );  // false
          
var retval = [12, 5, 8, 1, 4].some(isBigEnough); 
console.log("Returned value is : " + retval );  // true
```
> sort(); 对数组的元素进行排序。
> splice(); 从数组中添加或删除元素。
```typescript
var arr = ["orange", "mango", "banana", "sugar", "tea"];  
var removed = arr.splice(2, 0, "water");  
console.log("After adding 1: " + arr );    // orange,mango,water,banana,sugar,tea 
console.log("removed is: " + removed); 
          
removed = arr.splice(3, 1);  
console.log("After removing 1: " + arr );  // orange,mango,water,sugar,tea 
console.log("removed is: " + removed);  // banana
```
> toString(); 把数组转换为字符串，并返回结果。
> unshift(); 向数组的开头添加一个或更多元素，并返回新的长度。

* Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。Map 是 ES6 中引入的一种新的数据结构.
> 使用关键字new来创建Map:(JS一样)
```typescript
let myMap = new Map(
    [
            ["key1", "value1"],
            ["key2", "value2"]
    ]
);
myMap.clear(); //移除所有键值对
myMap.set("key3","test"); //设置键值对
myMap.get("key1"); //返回健对应的值
myMap.has("key1"); //返回bool
myMap.delete("key1"); //删除指定键值
myMap.size; //个数
myMap.keys(); //所有的键，返回一个Iterator对象
myMap.values(); //所有的值，返回一个Iterator对象
```

### 元组：说是数组里面的数据类型是相同的，想要不同就使用元组。鬼嘞，JS里面，数组就是可以有多种元素的，也有下面这些方法，TS是单独把它拿出来了吧?
```typescript
//声明 初始化，可以初始化的时候赋值，也可以先初始化后赋值
var mytarr = [];
mytarr[0] = 120;
mytarr[1] = "jc";
var jname = mytarr[1];

mytarr.push(1); //奇怪，之前在哪也用过这个
mytarr.pop(); //删除最后一个元素
mytarr[0] = 111; //改变元组中的元素，类似可变数组

//解构元组 这个玩法倒是没见过
var a = [10,"chenjian"];
var [b,c] = a;
console.log(b);
console.log(c);
```
### 联合类型 - 区分任意类型
```typescript
var val : string | number;
val = 12;
val = "2";

//联合类型数组
var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("**数字数组**")  
 
for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  
 
arr = ["Runoob","Google","Taobao"] 
console.log("**字符串数组**")  
 
for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}
```

### 接口
> 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
> 接口可以继承和多继承
> 你看下面代码，对比JS的

```typescript
interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
} 
 
var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
} 
 
console.log("Customer 对象 ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  
 
var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
} 
 
console.log("Employee  对象 ") 
console.log(employee.firstName) 
console.log(employee.lastName)
```
```javascript
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer 对象 ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  对象 ");
console.log(employee.firstName);
console.log(employee.lastName);
```

### 类 TypeScript 支持面向对象的所有特性，比如 类、接口等。
上代码
```typescript
class Car { 
    // 字段 
    engine:string; 
 
    // 构造函数 
    constructor(engine:string) { 
        this.engine = engine 
    }  
 
    // 方法 
    disp():void { 
        console.log("发动机为 :   "+this.engine) 
    } 
}
// 创建一个对象
var obj = new Car("XXSY1")
 
// 访问字段
console.log("读取发动机型号 :  "+obj.engine)  
 
// 访问方法
obj.disp()
```
```javascript
var Car = /** @class */ (function () {
    // 构造函数
    function Car(engine) {
        this.engine = engine;
    }
    // 方法
    Car.prototype.disp = function () {
        console.log("函数中显示发动机型号  :   " + this.engine);
    };
    return Car;
}());
// 创建一个对象
var obj = new Car("XXSY1");
// 访问字段
console.log("读取发动机型号 :  " + obj.engine);
// 访问方法
obj.disp();
```
* 类的继承：类继承使用关键字 extends，子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。不可以多继承，只能继承一个父类。但是支持多重继承。可对父类方法重写，和引用super。
* static：static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
* 访问权限：public、protected、private
* 类可以实现接口，使用关键字implements，并将interest字段作为类的属性使用。
```typescript
interface ILoan { 
   interest:number 
} 
 
class AgriLoan implements ILoan { 
   interest:number 
   rebate:number 
   
   constructor(interest:number,rebate:number) { 
      this.interest = interest 
      this.rebate = rebate 
   } 
} 
 
var obj = new AgriLoan(10,1) 
console.log("利润为 : "+obj.interest+"，抽成为 : "+obj.rebate )
```

### TypeScript 对象 是包含一组键值对的实例，值可以是标量、函数、数组、对象等。
```typescript
var sites = {
    site1: "Runoob",
    site2: "Google",
    sayHello: function () { } // 类型模板，注意这里只声明不实现
};
sites.sayHello = function () {
    console.log("hello " + sites.site1);
};
sites.sayHello();

//对象可以作为一个参数传给函数
var sites = { 
    site1:"Runoob", 
    site2:"Google",
}; 
var invokesites = function(obj: { site1:string, site2 :string }) { 
    console.log("site1 :"+obj.site1) 
    console.log("site2 :"+obj.site2) 
} 
invokesites(sites)
```

***[鸭子类型--没懂](https://www.runoob.com/typescript/ts-object.html)***

### 命名空间 目的：解决重名问题
```typescript
// IShamep.ts
namespace Drawing { 
    export interface IShape { 
        draw(); 
    }
}

//Circle.ts
/// <reference path = "IShape.ts" /> 
namespace Drawing { 
    export class Circle implements IShape { 
        public draw() { 
            console.log("Circle is drawn"); 
        }  
    }
}

//Triangle.ts
/// <reference path = "IShape.ts" /> 
namespace Drawing { 
    export class Triangle implements IShape { 
        public draw() { 
            console.log("Triangle is drawn"); 
        } 
    } 
}

//TestShape.ts
/// <reference path = "IShape.ts" />   
/// <reference path = "Circle.ts" /> 
/// <reference path = "Triangle.ts" />  
function drawAllShapes(shape:Drawing.IShape) { 
    shape.draw(); 
} 
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
```
嵌套命名空间
```typescript
// Invoice.ts
namespace Runoob { 
   export namespace invoiceApp { 
      export class Invoice { 
         public calculateDiscount(price: number) { 
            return price * .40; 
         } 
      } 
   } 
}

//InvoiceTest.ts
/// <reference path = "Invoice.ts" />
var invoice = new Runoob.invoiceApp.Invoice(); 
console.log(invoice.calculateDiscount(500));
```

### TypeScript 模块 待理解和运用 todo
> TypeScript 模块的设计理念是可以更换的组织代码。
  模块是在其自身的作用域里执行，并不是在全局作用域，这意味着定义在模块里面的变量、函数和类等在模块外部是不可见的，除非明确地使用 export 导出它们。类似地，我们必须通过 import 导入其他模块导出的变量、函数、类等。
  两个模块之间的关系是通过在文件级别上使用 import 和 export 建立的。
  模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。 大家最熟知的JavaScript模块加载器是服务于 Node.js 的 CommonJS 和服务于 Web 应用的 Require.js。
  此外还有有 SystemJs 和 Webpack。
 
### TypeScript 声明文件
> TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。
  虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。
  为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。
  我们需要使用 declare 关键字来定义它的类型，declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
  声明文件以 .d.ts 为后缀，声明文件或模块的语法格式如下：declare module Module_Name {}
  类似于我们的.h文件。
  