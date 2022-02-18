// 使用js创建json对象
var jsonobject = {
    "name":"chenjian",
    "age":18,
    "money":"very much",
    "sites":[
        "google","runoob","taobao"
    ],
    "moresites": [
        { "name":"Google", "info":[ "Android", "Google 搜索", "Google 翻译" ] },
        { "name":"Runoob", "info":[ "菜鸟教程", "菜鸟工具", "菜鸟微信" ] },
        { "name":"Taobao", "info":[ "淘宝", "网购" ] }
    ]
};
// 访问对象值两种方式
var name = jsonobject.name;
var age = jsonobject[age];
// 循环的时候只能用[]方式访问对象.
for(key in jsonobject) {
    console.log('key:'+key)
    console.log('value:'+jsonobject[key])
}
delete jsonobject.age;
for(key in jsonobject) {
    console.log('key:'+key)
    console.log('value:'+jsonobject.key)
}
for (i in jsonobject.sites) {
     x += jsonobject.sites[i] + "<br>";       
}
for (i=0;i<jsonobject.sites.length;i++) {
    x += jsonobject.sites[i] + "<br>";  
}
for (i in jsonobject.sites) {
    x += "<h1>" + jsonobject.sites[i].name + "</h1>";
    for (j in jsonobject.sites[i].info) {
        x += jsonobject.sites[i].info[j] + "<br>";
    }
}
// 服务器数据 一般是json字符串
// '{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }'

//(1) parse()将json字符串转为js对象
var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }')
// json 不能存储date对象,stringify会自动将date转为字符串,然后再转为date
var text = '{ "name":"Runoob", "initDate":"2013-12-14", "site":"www.runoob.com"}';
var obj = JSON.parse(text);
obj.initDate = new Date(obj.initDate);
// parse()方法有第二个可选参数,是一个转换结果的函数,每个对象成员都会调用此函数.如下:
var obj1 = JSON.parse(text,function(key,value){
    if(key == "initDate") {
        return new Date(value);
    }else {
        return value;
    }
});
// json 不允许包含函数,但是可以将函数转位json字符串,再转为函数
var text = '{ "name":"Runoob", "alexa":"function () {return 10000;}", "site":"www.runoob.com"}';
var obj2 = JSON.parse(text);
obj2.alexa = eval("("+obj2.alexa+")");//把文本包围在括号中，避免语法错误：
// document.getElementById("demo").innerHTML = obj.name + " Alexa 排名：" + obj.alexa();

// (2) stringgify(value,replcaer,space) 方法将json对象转为json字符串
// value是必填的, replacer 可选,用于转换结果的函数或数组,space 可选 文本添加锁紧、空格和换行符.
var obj3 = { "name":"runoob", "alexa":10000, "site":"www.runoob.com"};
var jsonstr = JSON.stringify(obj3);
// json数组 - > json字符串
var arr = [ "Google", "Runoob", "Taobao", "Facebook" ];
var myJSON = JSON.stringify(arr);
// 带有函数的 对象不能转json,相应的key/value会被删除,需要先把函数转为字符串,再转json字符串
var obj4 = { "name":"Runoob", "alexa":function () {return 10000;}, "site":"www.runoob.com"};
obj.alexa = obj.alexa.toString();
var myJSON4 = JSON.stringify(obj);

// (3)使用JS函数 eval()将json文本转为js 对象
var txt = '{ "sites" : [' +
'{ "name":"菜鸟教程" , "url":"www.runoob.com" },' +
'{ "name":"google" , "url":"www.google.com" },' +
'{ "name":"微博" , "url":"www.weibo.com" } ]}';
var obj = eval ("(" + txt + ")");

// 少用eval()函数,多用json解析器转换更为安全.因为eval()函数可以编译并执行任何js代码.

// (4) JSONP: