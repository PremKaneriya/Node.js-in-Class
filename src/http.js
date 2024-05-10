const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method);
    console.log(url.parse(req.url, true).query);

    res.writeHead(200, {'Content-Type': 'text.html'})
    res.write('hello world')
    res.end('end of the World')
})

server.listen(3000, () => {
    // console.log('server is running on port 3000')
})