const http = require('http')

const hostname = '127.0.0.1'

const port = 8000

const server = http.createServer((req, res) => {
   if (req.url ==='/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Kamusta")
   }
   else  if (req.url ==='/ice-cream') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Thanks for the ice cream!")
   } else  {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end("404 not found")
   }
})

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}/`)
})