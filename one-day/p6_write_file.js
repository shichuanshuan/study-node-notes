/** 写文件内容
 * 语法：
 * fs.writeFile(file, data[, options], callback)
 * 参数1：必须参数，字符串，表示文件的路径
 * 参数2：必选参数, 表示要写入的内容
 * 参数3：可选参数，表示以什么编码格式来读取文件。
 * 参数4：必选参数，文件写入完成后，通过回调函数拿到读取的结果。
 */

// 1. 导入 fs 文件系统模块
const fs = require('fs')

// 2. 调用 fs.writeFile() 方法，写入文件的内容
fs.writeFile('p6_write_test.txt', 'abcd', function(err) {
    if (err) {
        console.log("写入文件失败:" + err)
    }

    console.log("写入文件成功")
})