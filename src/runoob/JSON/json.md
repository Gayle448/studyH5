
##### JSON: javascript object notation (js对象表示法,json语法是js语法的子集)
json 是存储和交换文本信息的语法,类似xml.是轻量级的文本数据交换格式.
json独立于语言:使用js语法来描述数据对象,但json独立于语言和平台.json解析器和json库支持许多不同的编程语言,非常多的动态语言如php,jsp,.net都支持json.
JSON 文本的 MIME 类型是 application/json.
**由于相似性,无需解析器，JavaScript 程序能够使用内建的 eval() 函数，用 JSON 数据来生成原生的 JavaScript 对象。**
*与xml相同:*
* 纯文本
* 自我描述行(可读性)
* 层级结构(值套值)
* 可通过js解析
* 可用ajax进行传输
*与xml的区别:*
* 没有标签
* 比xml更小、读写速度更快
* 更易解析,可使用内建js eval()方法进行解析(有两个js函数).xml需要使用xml解析器来解析.
* 使用数组
* 不使用保留字
> 对于ajax,为啥json比xml更快更易使用?
> xml - > 读取xml文档 - > 使用 xml dom循环便利文档 - > 读取值并存储在变量中 
> json - > 读取json字符串 - > 用eval()处理 json字符串 (json.parse 解析json字符串)

##### JSONP: json with padding
是json的一种”使用模式“,可以让网页从别的域名/网站获取资料,即跨域读取数据.
现在所有支持JS的浏览器都会使用这个策略:同源策略,是由netscape提出的一个著名的安全策略.
TODO:待理解 (https://www.runoob.com/json/json-jsonp.html)





