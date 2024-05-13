const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const method = req.method.toLowerCase();
    const path = url.parse(req.url, true).pathname;

    if (method === 'get' && path === '/institute') {
        fs.readFile('src/data/data.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify("Internal Server Error"));
                console.error(err);
                return;
            }

            const id = url.parse(req.url, true).query.id;
            if (id) {
                const alldata = JSON.parse(data);
                const obj = alldata.find((v) => v.id == id);

                if (obj) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(obj));
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify("data not found" ));
                }
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    }
});

server.listen(3000, () => {
    console.log('Listening on port 3000...');
});
