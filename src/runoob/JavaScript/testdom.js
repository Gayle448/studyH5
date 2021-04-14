/*
* 通过HTML DOM，可访问JS HTML文档的所有元素。
* HTML DOM - 文档对象模型：
* 当网页被加载时，浏览器会创建 页面的文档对象模型，HTML DOM 模型被构造为对象的树：
* 通过可变成的对象模型，JS获得了足够的能力创建动态的HTML：
* JS能够改变页面中的所有HTML元素；
* JS能够改变页面中的所有HTML属性；
* JS能够改变页面中的所有CSS样式；
* JS能够对页面中的所有事件作出反应。
* 要操作HTML元素，首先，要找到该元素，有3种方式：
* 1。通过id找到HTML元素；
* 2。通过标签名找到HTML元素；
* 3。通过类名找到HTML元素。
* HTML DOM使JS有能力对HTML事件作出反应：
* 我们可以在事件发生时执行JS，比如当用户在HTML元素上点击时：onclick=JavaScript
* HTML事件：当用户点击鼠标时、当网页已加载时、当图像已加载时、当鼠标移动到元素上时、当输入字段被改变时、当提交HTML表单时、当用户触发按键时；
*
* 所有的JS对象都会从一个prototype(原型对象)中继承属性和方法.
*
* BOM - Browser Object Model 浏览器对象模型，使得JS有能力与浏览器"对话"
* 所有浏览器都支持window对象，它表示浏览器窗口。所有JS全局对象、函数以及变量都自动成为window对象的成员。
* 全局变量是window对象的属性，全局函数是window对象的方法，HTML DOM的document也是window对象的属性之一。
* Window尺寸：
* 1. window.innerHeight/innerWidth
* 2. document.documentElement.clientHeight/clientWidth
* 3. document.body.clientHeight/clientWidth
* 其他一些方法：
* window.open() - 打开新窗口
* window.close() - 关闭当前窗口
* window.moveTo() - 移动当前窗口
* window.resizeTo() - 调整当前窗口的尺寸
* * - 全局变量不能通过delete删除，window属性可以；访问未声明变量回报错，window对象访问，则是返回fundefined。
*
* window.screen 对象包含有关用户屏幕的信息;window.(可省略)screen.availwidth/availHeight,返回屏幕可用宽度/高度。
* window.location 对象用于获得当前页面的地址URL，并把浏览器重定向到新的页面。
* > location.hostname 返回web主机域名；
* > location.pathname 返回当前页面的路径和文件名；
* > location.port 返回web主机的端口;
* > location.protocal 返回所使用的web协议（如http:或https:）
* > location.href 返回当前页面URL；
* > location.assign(URL) 加载新的(HTML)文档，当前页面跳到新页面，可返回；
* > location.replace(URL) 当前窗口替换加载新文档，不能返回上一页；
* window.history 对象包含浏览器的历史
* > history.back() - 与在浏览器点击后退按钮相同
* > history.forward() - 与在浏览器中点击向前按钮相同
* > history.go(1/-1) - 1表示向前，-1表示后退一个页面，0表示刷新页面
* window.navigator 对象包含有关访问者浏览器的信息。
* > navigator.appCodeName - 浏览器代号
* > navigator.appName - 浏览器名称
* > navigator.cookieEnabled - 启用cookie
* > navigator.appVersion - 浏览器版本
* > navigator.platform - 硬件平台
* > navigator.userAgent - 用户代理
* > navigator.systemLanguage - 用户代理语言
* * navigator对象的信息具有误导性，不应被用于检测浏览器版本，因为数据可被浏览器使用者更改；对测试站点有可能识别错误；无法报告晚于浏览器发布的新操作系统；
* 根据不同浏览器 支持不同对象来检测...
*
* JS中弹窗有3中：警告框、确认框、提示框，换行用转义字符\n
* 警告框 - alert();
* 确认框 - confirm();
* 提示框 - prompt(); 经常用于提示用户在进入页面前输入某个值；
*
* JS计时事件：JS一个设定的时间间隔之后来执行代码，我们称之为计时事件。例子见下面方法testTimeInterval()
* */

//测试查找P元素修改 文字
function testdomlookhtml(index) {
    if (index === 1) {
        document.getElementById("test").innerHTML = "我是根据id修改后的文字";         //更改此元素的内容 (innerHTML)
        document.getElementById("image").src = "dog.png";           //修改了<img>元素的src 属性
    } else if (index === 2) {
        var body = document.getElementById("main");
        var p = body.getElementsByTagName("p");
        p[0].innerHTML = "我是根据标签修改后的文字";
        // document.write('id=main元素中的第一段落修改：'+ p[0].innerHTML);
        p[0].style.color = "blue"; // 改变HTML元素的 样式
    }else if (index === 3) {
        var p = document.getElementsByClassName("classname");
        p[0].innerHTML = "我是根据类名修改后的文字";
    }
}

function changeMyText(haha) {
    haha.innerHTML = "你好，很高兴认识你！";
}

function changeMyAnotherText(haha) {
    haha.innerHTML = "嗯嗯，我也很高兴认识你！";
}

function changMyhahaText(haha) { //OK
    haha.innerHTML = "哈哈，我也是哦1";
}

function inputchange(input) {
    console.log("我输入了");
    console.log(input.value); //获取输入框文字用value属性
}

function myOmver(div) {
    div.innerHTML = "移动到里面了";
    div.style.backgroundColor = "red";

    arrayTest();
}

function myOut(div) {
    div.innerHTML = "移动出去了";
    div.style.backgroundColor = "green";
}


//数组测试 打印实例 - 目的 拿来看效果的，实际highObj里有这个方法，可删除
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
    myCars = ["haha","daoban","en"];
    console.log(myCars[1]); //-- 变量 提升

    //todo 可以给数组自定义新方法，然后全局都可以用了吗？
    Array.prototype.myUcase=function(){
        for (i=0;i<this.length;i++){
            this[i]=this[i].toUpperCase();
        }
    }

    myCars.myUcase();
    for (i=0;i<myCars.length;i++){
        console.log(myCars[i]);
    }

}

function MathTest(arg) { //测试，可删除
    //直接Math对象调用就行了，不需要创建相应的对象来调用 todo 为什么有的函数可以直接调用里面的变量方法，有的确实要新建一个对象才能调

    console.log("调用了测试随机数的方法");

    //random 原来返回的是0-1之间的随机数，原来我理解错了
    if (arg == 1) {
        //生成随机数
        var randvalu = (min,max) => Math.round(Math.random()*(max-min))+min;
        document.getElementById("testRandom").innerHTML = randvalu(10,100);
    } else  if (arg == 2) {
        if (Math.random() < 0.5) {
            return true;
        }else {
            return false;
        }
        //如果随机数小于概率值，返回true，否则返回false
    }else  if (arg == 3) { //随机生成指定字符 todo ???
        var length = 3;
        var rangeMin = 0x80,rangeMax = 0x7FF;
        var result = "";
        while (result.length<length) {
            result += String.fromCharCode(Math.round(
                Math.random() * (rangeMax - rangeMin)
            ) + rangeMin);
            return result;
        }
    }else if (arg == 4) {
        Array.prototype.pick = function(){
            //不能为 ()=>{/*函数*/}，否则this会指向Window。
            return this[(this.length?Math.round(Math.random()*(this.length-1)):undefined)];//如果长度为0，返回undefined。
        }
    }else  if (arg == 5) { //[a,b)之间的随机数
        return Math.random()*(b-a)+a ; //<b
    }
}

//JS 计时事件：我们有能力做到在一个设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。我们称之为计时事件
function testTimeInterval()() {
    //setInterval() - 间隔指定的毫秒数不停的执行指定的代码；第一个参数时函数，第二个参数时间隔的毫秒数
    var myVar = setInterval(function () {
        alert("hell")
    },3000); //每3秒执行一次此方法
    clearInterval(myVar); // 用于停止setInterval()方法执行的函数代码

    //setTimeout() - 在指定的毫秒数后执行指定的代码；第一个参数，含有JS的字符串，或者函数；第二个参数是从多少毫秒后开始执行第一个参数
    myVar = setTimeout(function () {
        alert("hello")
    },2000);
    clearTimeout(myVar);
}

//cookie -- 用于存储web页面的用户信息
//cookie 使一些数据，存储于你电脑上的文本文件中。当web服务器向浏览器发送web页面时，在连接关闭后，服务端不会记录用户的信息。
//cookie 的作用就是用于解决"如何记录客户端的用户信息"：当用户访问web页面时，它的名字可以记录在cookie中；当用户下一次访问该页面时，可以在cooki中读取用户访问记录
function testCookie() {
    //cookie以名/值 对形式存储;使用JS document.cookie属性 来创建、读取、删除cookie
    //添加过期事件，UTC 或者 GMT事件，默认浏览器关闭时删除；path告诉浏览器cookie路径，默认当前页面。
    document.cookie = "username=chenjiang ; expires = Thu, 19 Dec 2020 12:12:12 GMT; path =/";
    //读取cookie,以字符串的方式返回所有的cookied
    var x = document.cookie;
    //使用JS 修改cookie ，新写一个cookie，旧的会被覆盖
    //使用JS 删除cookie expires 参数为当前时间
    //cookie字符串
}
//完整实例：
//设置cookie值
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+ d.toGMTString();
    document.cookie = cname + "=" + cvalue +";" + expires;
}

//获取cookie值
function getCookie(cname) {
    var name = cname + "=";
    var cArr = document.cookie.split(';');
    for (var i=0;i<cArr.length;i++){
        var c = cArr[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substr(name.length,c.length);
        }
    }
    return "";
}

//检测cookie值
function checkCookie() {
    var user = getCookie("username");
    if (user!=""){
        alert("欢迎"+user+"再次访问");
    } else  {
        user = prompt("请再次输入你的名字：","");
        if (user!="" && user!=null){
            setCookie("username",user,30);
        }
    }
}