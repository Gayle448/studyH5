const { default: axios } = require("axios");


// axios 请求方式有好几种
// get请求
// (1)
axios.get('/user?ID=123')
.then(function(response){

})
.catch(function(response){

});
// (2)
axios.get('/user',{
    params:{
        ID:123
    }
})
.then(function(response){

})
.catch(function(response){

});
// post请求
// (3)
axios.post('/user',{
    key1:'1',
    key2:'2'
})
.then(function(response){

})
.catch(function(response){

});
// (4)
axios({
    method:'post',
    url:'/user/123',
    data:{
        key1:'1',
        key2:'2'
    }
})
// 获取图片数据
axios({
    method:'get',
    url:'http://bit.ly/2mTM3nY',
    responseType:'stream'
})
.then(function(response){
    response.data.pipe(fs.createWriteStream(''))
})
// (5)默认是GET
axios('user/123',{
    // 可选
})

// 为方便起见，为所有支持的请求方法提供了别名;在使用别名方法时， url、method、data 这些属性都不必在配置中指定。 
// 同(2)
// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])

// (6) 创建请求实例
const instance = axios.create({
    baseURL:'',
    timeout:1000,
    headers:{}
});
// 实例可以调方法设置配置
instance.get('http://baidu.com',{})


// 请求配置选项 config
axios('test/123',{
    // 必须
    url:'/user',
    // 非必需,默认 get
    method:'post',
    // url非绝对路径时,自动加在url前面
    baseURL:'http://baidu.com',
    // 自定义请求头
    headers:{
        'X-Requested-With':'XMLHttpRequest'
    },
    // 允许在向服务器发送前,修改请求数据,只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest:[function(data,headers){
        return data;
    }],
    // 参数,必须是一个无格式对象
    params:{
        ID:123
    },
    // 负责`params`序列化的函数
    paramsSerializer:function(params){
        return qs.stringify(params,{
            arrayFormat:'brackets'
        })
    },
    // `data`作为请求主体被发送的数据,只适用于`PUT`、`POST`、`PATCH`
    // 在没有设置 `transformRequest` 时，必须是以下类型之一：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - 浏览器专属：FormData, File, Blob
    // - Node 专属： Stream
    data:{
        firstname:'fred'
    },
    // 超时时间 毫秒数
    timeout:1000,
    // 允许响应内容的最大值
    maxContentLength:2000,

    // 表示跨域请求时是否需要使用凭证
    withCredentials:false,
    // 表示应该使用http基础验证
    // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
    auth:{
        token:'jjj'
    },
    // 服务器响应类型
    responseType:'json',
    // 响应解码编码
    responseEncoding:'utf8',
    // 定义在node.js中follow的最大重定向数目
    maxRedirects:5,
    // 自定义代理,默认没有启用
    httpAgent:new http.Agent({keepAlive:true}),
    httpsAgent:new https.Agent({keepAlive:true}),
    // 定义代理服务器的主机名称和端口;优先级高于header里面的设置;
    proxy:{
        host:'127.0.0.1',
        port:'8888',
        auth:{
            username:'jc',
            password:'123'
        }
    },
    // `cancelToken` 指定用于取消请求的 cancel token
    cancelToken:new cancelToken(function(cancel){

    }),
    // `adapter` 允许自定义处理请求，以使测试更轻松 TODO:
    // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
    adapter: function (config) {
        /* ... */
    },
    // 上传进度处理
    onUploadProgress:function(progressEvent){

    },
    // 下载进度事件处理
    onDownloadProgress:function(progressEvent){

    },
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data;
    }],
    // 处理给定的响应状态码,是resolve 还是reject
    validateStatus:function(status){
        return status>=200
    },

     // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
    xsrfCookieName: 'XSRF-TOKEN', // default

    // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
    xsrfHeaderName: 'X-XSRF-TOKEN', // default

})

function getname (){
    return axios.get('/user/name/123');
}
function getage () {
    return axios.get('/user/age/18');
}
// 多并发请求
axios.all([getname(),getage()])
.then(function(response){

})
.catch(function(response){

});

// 响应结构
axios.get('/user',{
    params:{
        ID:123
    }
})
.then(function(response){

})
.catch(function(response){
    // 服务器提供的响应 {}
    var data = response.data;
    // HTTP 状态码
    var status = response.status;
    // HTTP 状态信息
    var statusTx = response.statusText;
    // 响应 头
    var header = response.headers;
    // 请求的配置信息
    var config = response.config;
    // 请求
    var request = response.request;
    // 响应错误
    var error = response.error;
});

// 全局配置默认值
axios.defaults.baseURL = "";
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post[`Content-Type`] = 'application/x-www-form-urlencoded';

// 配置优先顺序
// 配置会以一个优先顺序进行合并。这个顺序是：在 lib/defaults.js 找到的库的默认值，然后是实例的 defaults 属性，最后是请求的 config 参数。后者将优先于前者。这里是一个例子： 
// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
var instance = axios.create();

// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 2500;

// 为已知需要花费很长时间的请求覆写超时设置
instance.get('/longRequest', {
  timeout: 5000
});

// 拦截器 : 在请求/响应的 then或 catch前拦截
// 添加请求拦截器
axios.interceptors.request.use(function(config){
    // 发送请求前 修改配置
    return config;
},function(error){
    // 对请求错误做什么操作
    return Promise.reject(error);
});
// axios实例添加拦截器
instance.interceptors.request.use(function(){});
// 添加响应拦截器
axios.interceptors.response.use(function(response){
    // 对响应数据做的啥
    return response;
},function(error){
    // 对响应错误做点啥
    return Promise.reject(error);
});
// 移除拦截器
const myInterceptor = axios.interceptors.request.use(function(){});
axios.interceptors.request.eject(myInterceptor);

// 错误处理
axios.get('/user/123')
.then(function(response){

})
.catch(function(error){
    if(error.response){
        // error.response.data
        // error.response.status
        // error.response.header
    }else if (error.request){
        // error.request
    }else {
        // error.message
    }
})

// 使用 cancel token取消请求
const cancelToken = axios.CancelToken;
const source = cancelToken.source();
axios.get('/user/123',{
    cancelToken:source.token
}).catch(function(thrown){
    if(axios.isCancel(thrown)){
        console.log('request canceled',thrown.message);
    }else{
        // 处理错误
    }
});
axios.post('/user/123',{
    name:'new name'
},{
    cancelToken:source.token
});
// 取消请求 message 参数是可选的
source.cancel('Operation canceled by the user.');

// 传递一个 executor函数到CancelToken的构造函数来创建 cancel token:
const CancelToken = axios.CancelToken;
let cancel;
axios.get('/user/123',{
    cancelToken:new CancelToken(function executor(c) {
        cancel = c;
    })
});
cancel();
// 可以 使用同一个cancel token取消多个请求

// 默认下,axios 将JS对象序列化为json,要以application/x-www-form-urlencoded格式发送数据.
// 浏览器中,使用urlsearchParams API. (所有浏览器都不支持???)
const params = new URLSearchParams();
params.append('param1','value1');
params.append('param2','value2');
axios.post('/foo',params);
// 或者使用qs库编码数据
const qs=require('qs');
axios.post('/foo',qs.stringify({'bar':123}));
// 或者ES6
import qs1 from 'qs';
const data = {'bar':123};
const options = {
    method:'POST',
    headers:{'content-type':},
    data:qs.stringify(data),
    url
};
axios(options);

// Node.js
const querstr = require('querstring');
axios.post('http://baidu.com',querstr);

// Semver

// Promises

// TypeScript
import axios from 'axios';
axios.get('/user/123');




