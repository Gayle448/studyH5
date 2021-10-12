《书读百遍，其义自见。不常用，总会忘。》

### JS记忆备忘录

#### 心得
* 不要把一堆概念、知识、锻炼都丢到一个文件里，你真的不会再去看，再去考古你也看不懂，哭都没用，没深入学进去，没法快速复习，到头来白搭的感觉


#### 特殊语法
* document.write(""") 写入html标签元素，在原有代码结构上添加一串html代码，页面加载后被调用则是覆盖重写页面，用的时候要慎重。
  同学解释：document.write是直接写入到页面的内容流，如果在写之前没有调用document.open, 浏览器会自动调用open。每次写完关闭之后重新调用该函数，会导致页面被重写。
* var x = document.getElementById("") 查找元素，获得的元素对象可赋值给一个变量，可通过变量使用点语法访问该元素的属性，如图片的src属性:x.src
* 上述获取HTML 元素后可直接访问修改元素，x.src=".png" ；修改: x.innerHTML="haha"；innerHTML是DOM页面元素的一个属性，代表该元素的html内容。你可以精确到某一个具体的元素来进行更改。
* isNaN() 判断是不是一个数字，严格上还要配合正则来 ：isNaN(x)||x.replace(/(^\s*)|(\s*$)/g,"")=="" <不是数字>
* 判断一个变量是undefined 推荐使用严格相等 === ，原因见： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined


#### 特殊概念
* JavaScript : 轻量级的编程语言；可插入HTML 页面；是所有现代浏览器以及 HTML5 中的默认脚本语言；
  JavaScript 语句 是发给浏览器的命令，告诉浏览器要做的事情；
* ECMA : 欧洲电脑制造商协会；一个标准协会；ECMA-262 是 JavaScript 标准的官方名称；
* ECMAScript : 通过 ECMAScript 实现JavaScript语言的标准化；就是说它是一套标准把； 
* DOM (Document Object Model)（文档对象模型）: 是用于访问 HTML 元素的正式 W3C 标准；
* XMLHttpRequest : 
* is not defined : 是，没有定义这样一个变量；
* is undefined : 是没有赋初值就使用了；
* 字面量 ： 通俗点讲就是一个变量的值，可以单独当作一个对象来用吧。没声明类型的变量有什么样的字面量决定它是什么样的变量。（纯属猜测哦）变量是名称，字面量是值；变量可变，字面量恒定。
  你请A吃午餐，点菜环节，吃什么菜还没确定，是个变量，可以吃红烧猪脚，大片牛肉，铁板虾等，这些菜菜如其名，就是字面量；
  引用拷贝的话，就是你点了一盘大片牛肉，你和朋友一起吃，值拷贝的话，就是你点了一盘牛肉后你朋友也想吃，你给他也点了一份一样的。
* 驼峰命名法 ：变量名命名规则之一；
  小驼峰 ： firstName ； 大驼峰 ： FirstName ； 下划线法 ：first_name ；
  
