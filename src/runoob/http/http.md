Web服务器有:
Apache 服务器
IIS服务器
nigx服务器等;

HTTP协议(超文本传输协议):
是一种用于分布式、协作式和超媒体信息系统的应用层协议,是因特网上应用最为广泛的一种网络传输协议,是用于万维网服务传输超文本到本地浏览器的传送协议,所有的WWW文件都必须遵守这个标准.
HTTP是基于TCP/IP通信协议来传递数据的.HTTP协议默认工作再TCP协议的80端口.
HTTP协议工作与客户端-服务端架构上,浏览器作为**HTTP客户端**通过**URL**向**HTTP服务器**及`WEB服务器`发送所有请求.
HTTP协议以明文方式发送内容,不提供任何方式的加密.

* HTTP无连接:每次连接只处理一个请求,节省传输时间.
* HTTP是媒体独立的:客户端和服务器互相约定数据内容,任何类型数据都可发送.指定合适的MIME-type.
* HTTP是无状态:对于事务处理没有记忆能力,后续需要前面的信息必须重传,导致传送数据量增大.

CGI使网页具有交互功能;
MIME Type是资源的媒体类型,经过互联网组织协商,作为标准发布;媒体类型通常通过HTTP协议,由Web服务器告知浏览器,通过conetent-Type表示.如果是某个客户端自己定义的格式,一般只能以application/x-开头.

HTTP客户端应用程序:连接到服务器向服务器发送请求.
> 发送一个请求消息:请求行、请求头、空行、请求数据
HTTP服务器应用程序:接受客户端的请求并向客户端发送HTPP响应数据.
> 响应消息:状态行、消息报头、空行、响应正文

HTTP请求方法:
GET:请求指定的页面信息,返回实体主体;
HEAD:类似GET,返回没有具体内容,用于获取报头;
POST:向指定资源提交数据进行处理请求,数据包含在请求体中,可能会导致新的资源的建立和修改.
PUT:客户端传送的数据取代指定文档的内容.
PATCH:对PUT的补充,对已知资源进行局部更新.
DELETE:删除服务器指定页面.
CONNECT:HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。
OPTIONS:允许客户端查看服务器的性能.
TRACE:回显服务器收到的请求,主要用于测试或诊断.

HTTP响应信息头:
| 字段 | 意思 |
| Allow | 文档的编码（Encode）方法 |
| Content-Encoding | 文档的编码（Encode）方法 |
|Content-Length | 内容长度 |
| Content-Type | 文档属于什么MIME类型 |
| Date | 当前的GMT时间 |
| Expires | 文档过期时间 |
| Last-Modified | 文档的最后改动时间 |
| Location | 哪里去提取文档 |
| Refresh | 浏览器多少时间之后刷新文档,一次性非连续 |
| Server | 服务器名字 |
| Set-Cookie | 设置和页面关联的Cookie |
| WWW-Authenticate | 客户应该在Authorization头中提供什么类型的授权信息? |

HTTP状态码(常见):
HTTP状态码由三个十进制数字组成,第一个十进制数字定义了状态码的类型,五类:1(信息响应)2(成功响应)3(重定向)4(客户端错误)5(服务器错误)
| 字段 | 意思 |
| 200 | 成功 |
| 400 | 客户端请求语法错误 |
| 401 | 用户身份认证失败 |
| 403 | 服务器拒绝此请求(可能请求方式错误) |
| 404 | 服务器无法找到请求相应资源 |
| 405 | 客户端请求的方法被禁止 |
| 408 | 服务器等待客户端发送的请求超时 |
| 500 | 服务器内部错误,无法完成请求 |
| 501 | 服务器不支持请求的功能,无法完成请求 |
| 502 | 网关/代理服务器,远端服务器收到无效响应 |
| 503 | 超载或系统维护,服务器无法处理客户端请求 |
| 504 | 网关/代理服务器,未及时从远端服务器获得请求 |

HTTP常见 content-type:
| 字段 | 意思 |
| text/html  |  HTML格式 |
| text/plain | 纯文本格式 |
| text/xml  | XML格式 |
| image/gif | gif图片格式 |
| image/jpeg | jpg图片格式 |
| image/png | png图片格式 |
| application/xml | XML数据格式 |
| application/json | JSON数据格式 |
| application/pdf | pdf格式 |
| application/msword | Word文档格式 |
| application/octet-stream | 二进制流数据（如常见的文件下载) |
| application/x-www-form-urlencoded | 表单默认的提交数据的格式 |
| multipart/form-data | 需要在表单中进行文件上传时，就需要使用该格式 |

HTTPS(超文本传输安全协议):
是一种透过计算机网络进行安全通信的传输协议.
HTTPS经由HTTP进行通信,但利用SSL/TLS来加密数据包.目的是提供对网站服务器的身份认证,保护交换数据的隐私和完整性.
默认工作在TCP协议443端口.

HTTP与HTTPS区别:
* http明文传输,不加密;http传输过程加密,安全性高;
* https协议需要到CA申请证书;
* HTTP页面响应速度更快,http tcp3次握手3个包, https tcp3 + ssl9 = 12 个包
* http和 https连接方式和端口 80 443不一样
* https 是构建在ssl/tls上的http协议,https比http更耗费服务器资源.

