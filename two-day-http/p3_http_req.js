/**
 * req 请求对象
 * 只要服务器接收到了客户端的请求，就会调用通过 server.on() 为服务器绑定的 request 事件处理函数。
 * 如果想在事件处理函数中，方位与客户端相关的数据活属性，可以使用如下的方式
*/
// 1. 导入 http 模块
const http = require('http')

// 2. 创建 Web 服务器实例
const server = http.createServer()

// 3. 为服务器实例绑定 request 事件，监听客户端的请求。
server.on('request', (req) => {
    /**
     * req 是请求对象，它包含了与客户端相关的数据和属性
     * 例如：
     * req.url 是客户端请求的URL地址
     * req.method 是客户端的 method 请求类型
     */

    const str = `Your request url is ${req.url}`
    console.log(str)
})

// 4, 启动服务器
server.listen(8881, function() {
    console.log('server runing...')
})