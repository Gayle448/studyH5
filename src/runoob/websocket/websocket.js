var socket = new WebSocket(url,[protocol]);

if (socket.readyState == 0) {
    // 尚未建立连接
} else if (socket.readyState == 1) {
    // 已建立连接,可进行通信
} else if (socket.readyState == 2) {
    // 连接正进行关闭
} else if (socket.readyState == 3) {
    // 连接已经关闭/不能打开
} 

switch (socket.readyState) {
    case socket.CONNECTING:
        break;
    case socket.OPEN:
        break;
    case socket.CLOSING:
        break;
    case socket.CLOSED:
        break;
    default:
        break;
}

socket.onopen = function(){
    socket.send("发送数据");
};//连接建立时触发的回调函数
// 如果要指定多个回调函数,可使用addeventlistener()方法
socket.addEventListener('open',function(event){
    socket.send('');
});

// 可是显示指定收到的二进制数据类型
socket.binaryType = "blob";//二进制文件
socket.binaryType = "arraybuffer";//二进制图片
socket.onmessage = function(evt) {
    var received_msg = evt.data;
    // 服务器数据可能是文本,也可能是二进制数据 (blob对象或 arraybuffer对象)
    if(typeof received_msg === String) {

    }
    if (received_msg instanceof ArrayBuffer) {

    }
};//客户端接收服务器数据时触发

if(socket.bufferedAmount ===0) {
    // 发送完毕
}else {
    // 还有*字节数据没有发送出去
}

socket.onerror = function() {

};//通信发生错误
socket.onclose;//通信关闭

// socket.send();//使用连接发送数据
// socket.close();//关闭连接

