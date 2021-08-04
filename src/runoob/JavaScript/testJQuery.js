var myname = "泽元软件 会议上面变量提升不明的问题：是因为函数提升》变量提升，嘤嘤嘤";
function showName() {
    console.log(myname);
    if (0){
        var myname = "zving";
    }
    console.log(myname)
}
showName();