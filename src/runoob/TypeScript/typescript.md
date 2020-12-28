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
