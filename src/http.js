const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.headers);
    console.log(req.method);   
    console.log(req.url); 

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write('done')
    res.end()
})

server.listen(3000, () => {
    console.log('Listening on port 3000...')
})
