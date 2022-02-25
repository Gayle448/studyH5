#### XHR - XMLHttpRequest

xmlhttprequest对象:
* 在不重新加载页面的情况下更新网页
* 在页面已加载后从服务器请求数据
* 在页面已加载后从服务器接收数据
* 在后台向服务器发送数据

所有现代的浏览器有一个内建的xmlhttprequest对象.
直接创建: 
xmlhttp = new XMLHttpRequest();
发送请求:
xmlhttp.open(请求类型,url-一个在服务器上的文件的地址,同步/异步);
xmlhttp.send();仅用于post请求;
xmlhttp.onreadystatechanget = function(){}; //异步请求时,服务器响应相应函数,每次在readyState-xmlhttprequest状态(0-4)变化时触发.
xmlhttp.responseText; 服务器响应的不是XML
xmlhttp.responseXML; 服务器响应的是XML
xmlhttp.getAllResponseHeaders(); 获取头部信息
xmlhttp.getResponseHeader('Last-Modified'); 获取指定头部信息



