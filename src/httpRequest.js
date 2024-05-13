const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const method = req.method.toLowerCase();
    const path = url.parse(req.url, true).pathname  

    if (method === 'get' && path === '/institute') {
        fs.readFile('src/data/data.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                console.error(err);
                return;
            }
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.write(data)
            res.end()
        })
    }
})

server.listen(3000, () => {
    console.log('Listening on port 3000...')
})