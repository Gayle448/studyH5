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

// function changMyhahaText(haha) {
//     haha.innerHTML = "哈哈，我也是哦";
// }

function inputchange(input) {
    console.log("我输入了");
    console.log(input.value); //获取输入框文字用value属性
}

function myOmver(div) {
    div.innerHTML = "移动到里面了";
    div.style.backgroundColor = "red";
}

function myOut(div) {
    div.innerHTML = "移动出去了";
    div.style.backgroundColor = "green";
}