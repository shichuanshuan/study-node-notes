/**
 * 创建最基本的 Web 服务器
*/
// 1. 导入 http 模块
const http = require('http')

// 2. 创建 Web 服务器实例
const server = http.createServer()

// 3. 为服务器实例绑定 request 事件，监听客户端的请求。
// 写法一
// server.on('request', function(req, res){
//     console.log("Someone visit our web server.")
// })

// 写法二
server.on('request', (req) => {
    console.log("Someone visit our web server.")
})

// 4, 启动服务器
server.listen(8881, function() {
    console.log('server runing...')
})