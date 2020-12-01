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


