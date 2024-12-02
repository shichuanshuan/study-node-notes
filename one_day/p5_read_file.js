/** 读文件内容
 * fs 文件系统模块
 * fs 模块是 Node.js 官网提供的，用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。
 * 
 * 例如：
 * fs.readFile() 方法，用来读取指定文件中的内容
 * fs.writeFile() 方法，用来向指定的文件中写入内容
 * 
 * 使用方式
 * const fs = require('fs')  安装时就已经安装了 fs 模块
*/

/**
 * 语法：
 * fs.readFile(path[, options], callback)
 * 参数1：必须参数，字符串，表示文件的路径
 * 参数2：可选参数，表示以什么编码格式来读取文件。
 * 参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。
 */

// 1. 导入 fs 模块，来操作文件
const fs = require('fs')

// 2. 调用 fs.readFile() 方法读取文件
fs.readFile('p5_read_test.txt', 'utf-8', function(err, dataStr) {
    // 3. 打印结果
    if (err) {
        console.log("读取文件失败:" + err)
    }
    

    // 4. 打印文件内容
    console.log("读取文件成功:" + dataStr)
})