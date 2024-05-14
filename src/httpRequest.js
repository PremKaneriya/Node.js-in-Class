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
                res.end(JSON.stringify({ errorMessage: "Internal Server Error" }));
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
                    res.end(JSON.stringify({ errorMessage: "Data not found" }));
                }
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    } else if (method === 'post' && path === '/institute') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const newData = JSON.parse(body);
                const alldata = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));
                alldata.push(newData);

                fs.writeFile('src/data/data.json', JSON.stringify(alldata), (err) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ errorMessage: "Internal Server Error" }));
                        console.error(err);
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ successMessage: 'Data Added Successfully' }));
                });
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ errorMessage: "Bad Request" }));
            }
        });
    } else if (method === 'delete' && path === '/institute') {
        try {
            const id = url.parse(req.url, true).query.id;
            const alldata = JSON.parse(fs.readFileSync('src/data/data.json', 'utf8'));
            const data = alldata.filter((v) => v.id != id);

            fs.writeFile('src/data/data.json', JSON.stringify(data), (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ errorMessage: "Internal Server Error" }));
                    console.error(err);
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ successMessage: 'Data Deleted Successfully' }));
            });
        } catch (error) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ errorMessage: "Bad Request" }));
        }
    } else if (method === 'put' && path === '/institute') {
        let body = '';
    
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
    
        req.on('end', () => {
            try {
                const newData = JSON.parse(body);
    
                fs.readFile('src/data/data.json', 'utf-8', (err, data) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ errorMessage: "Internal Server Error" }));
                        console.error(err);
                        return;
                    }
    
                    const alldata = JSON.parse(data);
                    const index = alldata.findIndex((v) => v.id == newData.id);
    
                    if (index !== -1) {
                        alldata[index] = newData;
    
                        fs.writeFile('src/data/data.json', JSON.stringify(alldata), (err) => {
                            if (err) {
                                res.writeHead(500, { 'Content-Type': 'application/json' });
                                res.end(JSON.stringify({ errorMessage: "Internal Server Error" }));
                                console.error(err);
                                return;
                            }
    
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({ successMessage: 'Data Updated Successfully' }));
                        });
                    } else {
                        res.writeHead(404, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ errorMessage: "Data not found" }));
                    }
                });
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ errorMessage: "Bad Request" }));
            }
        });
    }
    
});

server.listen(3000, () => {
    console.log('Listening on port 3000...');
});
