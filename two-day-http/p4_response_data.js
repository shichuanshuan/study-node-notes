/**
 * 根据不同的 url 响应不同的 html 内容
 */
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    // 1. 获取请求的 url 地址
    const url = req.url

    // 2. 设置默认响应内容为 404 Nof found
    let content = '<h1>404 Nof found</h1>'

    // 3. 判断用户请求的是否为 / 或 /index.html 首页

    // 4. 判断用户请求的是否为 /abount.html 关于页面
    if (url == '/' || url == '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url == '/abount.html' || url == '/abount') {
        content = '<h1>关于</h1>'
    }

    // 5. 设置 Content-Type 响应头，防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    // 6. 使用 res.end() 把内容响应给客户端
    res.end(content)
})


server.listen(8881, function() {
    console.log('server runing...')
})