/**
 * res 响应对象
 * 在服务器的 request 事件处理函数中，如果想要访问与服务器相关的数据或属性，可以使用如下的方式：
*/
// 1. 导入 http 模块
const http = require('http')

// 2. 创建 Web 服务器实例
const server = http.createServer()

// 3. 为服务器实例绑定 request 事件，监听客户端的请求。
server.on('request', (req, res) => {
    // res 是响应对象，它包含了与服务器相关的数据和属性

    // 要发送到客户端的字符串
    const str = `Your request url is ${req.url}, and method ${req.method}`
    
    // 向客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str)
})

// 4, 启动服务器
server.listen(8881, function() {
    console.log('server runing...')
})