/*例子1*/
var message : string = "Hello World"
console.log(message)

/*例子2*/
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

/*例子3*/
//数字类型 值可以为二进制、八进制、十进制、十六进制；JS和TS 没有整数类型
let num : number = 11;
let str : string = "chenjian";
let words : string = '您好，我叫 ${ str } ，我今年 ${ str+10 } 岁了'; //这里输出不会输出变量值 todo ???
console.log(words);
let flag : boolean = true;
//数组类型1: 在元素类型后面加[]
let arr : number[] = [1,2];
//数组类型2：数组泛型
let arrA : Array<number> = [1,2];
//元祖：用来表示已经元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
let x : [string,number];
x = ['chenjian',2];
console.log(x[0]);
//枚举：用于定义数值集合
enum age {
    young,
    middle,
    old
};
let myage : age = age.old;
console.log(myage); //2
//枚举笔记：
const getValue = () => {
    return 0
}

enum List {
    A = getValue(),
    B = 2,  // 此处必须要初始化值，不然编译不通过
    C
}
console.log(List.A) // 0
console.log(List.B) // 2
console.log(List.C) // 3

//void : 用于标志方法返回值的类型，表示该方法没有返回值
//null : 表示对象值缺失
//undefined : 用于初始化变量为一个未定义的值
//never : 是其他类型（包括null 和 undefined）的子类型，代表从不会出现的值
//any 可以赋予任意类型的值。和swift option 可选值类似吧？



