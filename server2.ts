// 基于 TCP 协议实现 http 服务

import { createServer } from 'net';

// client为 socket 实例
const server = createServer(client => {
  console.log('address', client.remoteAddress)
  console.log('port', client.remotePort)

  // 接收客户端数据
  client.on('data', data => {
    console.log(data.toString())
    // 获取并解析，对应返回响应
    client.write(`HTTP/1.1 200 OK\r
    Content-Type: text/html\r
    Content-Length: 14\r\n
    <h1>hello, world!</h1>
    `)
    // 关闭连接
    client.end()
  })

  
})

server.listen({
  host: '127.0.0.1',
  port: 8880
})