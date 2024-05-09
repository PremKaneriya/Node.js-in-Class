const os = require('os')

console.log(os.version());
console.log(os.tmpdir());
console.log(os.type());
console.log(os.platform());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.arch());
console.log(os.hostname());
console.log(os.machine());
console.log(os.networkInterfaces()['Wi-Fi'][0].mac);
console.log(os.userInfo());
