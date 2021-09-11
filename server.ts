import { createServer, Server } from "http";

// 1.创建一个 http.Server
const server = createServer((req, res) => {
  // 2.设置状态码
  res.statusCode = 200

  // 3.设置响应头 返回一条信息给前端
  res.setHeader('Content-Type', 'text/html')

  // 4.返回内容
  res.end('<h1> hello, world!</h1>')
})

server.listen(8088, () => {
  console.log('server started, listen: 8088端口')
})