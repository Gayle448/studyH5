背景:
http协议不能主动向客户端推送信息,通信只能由客户端发起.
所以服务器有连续变化,客户端想要获知就很麻烦,只能用“轮询”,但是这样客户端需要不断发送请求,且http头部可能较长,非常浪费资源,
WebSocket协议在2008年诞生,11年成为国际标准,所有浏览器都支持,最大的特点是,服务器可以主动向客户端推送信息,客户端也可以主动向服务器发送信息,双向平等对话,属于服务器推送技术的一种.
其他特点:
* 建立在TCP协议上,服务器端实现比较容易;
* 与HTTP协议有良好的兼容性,默认端口是80和443,且握手阶段采用HTTP协议,握手时不容屏蔽,能通过HTTP代理服务器.
* 数据格式比较轻量,性能开销小,通信高效;
* 可以发送文本,可以发送二进制数据;
* 没有同源限制,客户端可以与任意服务器通信;
* 协议标志符是WS(加密是WSS),服务器网址是URL(ws://example.com:80/some/path)
  
在websocket api 中,浏览器和服务器只需要完成一次握手,两者之间就直接可以创建持久性的链接,并进行双向数据传输.
**解释:**
WebSocket 协议本质上是一个基于 TCP 的协议。
为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。

Socket 是传输控制层协议，WebSocket 是应用层协议。

---------------------------------------------------------------

Websocket 使用和 HTTP 相同的 TCP 端口，可以绕过大多数防火墙的限制。默认情况下，Websocket 协议使用 80 端口；运行在 TLS 之上时，默认使用 443 端口。

一个典型的Websocket握手请求如下：

客户端请求

GET / HTTP/1.1
Upgrade: websocket
Connection: Upgrade
Host: example.com
Origin: http://example.com
Sec-WebSocket-Key: sN9cRrP/n9NdMgdcy2VJFQ==
Sec-WebSocket-Version: 13

服务器回应

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: fFBooB7FAkLlXgRSz0BT3v4hq5s=
Sec-WebSocket-Location: ws://example.com/

    Connection 必须设置 Upgrade，表示客户端希望连接升级。
    Upgrade 字段必须设置 Websocket，表示希望升级到 Websocket 协议。
    Sec-WebSocket-Key 是随机的字符串，服务器端会用这些数据来构造出一个 SHA-1 的信息摘要。把 “Sec-WebSocket-Key” 加上一个特殊字符串 “258EAFA5-E914-47DA-95CA-C5AB0DC85B11”，然后计算 SHA-1 摘要，之后进行 BASE-64 编码，将结果做为 “Sec-WebSocket-Accept” 头的值，返回给客户端。如此操作，可以尽量避免普通 HTTP 请求被误认为 Websocket 协议。
    Sec-WebSocket-Version 表示支持的 Websocket 版本。RFC6455 要求使用的版本是 13，之前草案的版本均应当弃用。
    Origin 字段是可选的，通常用来表示在浏览器中发起此 Websocket 连接所在的页面，类似于 Referer。但是，与 Referer 不同的是，Origin 只包含了协议和主机名称。
    其他一些定义在 HTTP 协议中的字段，如 Cookie 等，也可以在 Websocket 中使用。

在服务器方面，网上都有不同对websocket支持的服务器：

    php - http://code.google.com/p/phpwebsocket/
    jetty - http://jetty.codehaus.org/jetty/（版本7开始支持websocket）
    netty - http://www.jboss.org/netty
    ruby - http://github.com/gimite/web-socket-ruby
    Kaazing - https://web.archive.org/web/20100923224709/http://www.kaazing.org/confluence/display/KAAZING/Home
    Tomcat - http://tomcat.apache.org/（7.0.27支持websocket，建议用tomcat8，7.0.27中的接口已经过时）
    WebLogic - http://www.oracle.com/us/products/middleware/cloud-app-foundation/weblogic/overview/index.html（12.1.2開始支持）
    node.js - https://github.com/Worlize/WebSocket-Node
    node.js - http://socket.io
    nginx - http://nginx.com/
    mojolicious - http://mojolicio.us/
    python - https://github.com/abourget/gevent-socketio
    Django - https://github.com/stephenmcd/django-socketio
    erlang - https://github.com/ninenines/cowboy.git