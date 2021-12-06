const http = require('http')
const url = require('url')

const server = http.createServer()

server.on('request', (req, res) => {
  const parsed = url.parse(req.url)
  console.log(parsed)
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('got it')
})

server.listen(8080)
