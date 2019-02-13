// Let's try to keep this under 100 lines.
const http = require('http')
const port = 8080
const server = http.createServer((req, res) => {
  console.log('request: ' + req)
  res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`<!DOCTYPE html>
  <html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <div id="client-list">
      <h2>Client side rendered</h2>
    </div>
    <div id="server-list">
      <h2>Server side rendered</h2>
    </div>
  </body>
  </html>`)
  res.end()
  })


  server.listen(port)
  console.log('Server running at http://localhost:' + port + '/')