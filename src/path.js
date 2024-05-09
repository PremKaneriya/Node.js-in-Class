const path = require('path')

// The path module in Node.js provides a way to work with file paths. It allows you to perform various operations on file paths, such as joining paths, resolving paths, extracting information from paths, and more. It's a core module, which means you don't need to install it separately; it's built into Node.js.

// joining path
const filePath = path.join('document', 'notes', 'example.pdf')
console.log(filePath);

// base name of path
const base = path.basename(filePath)
console.log(base);

// directory name of path
const dir = path.dirname(filePath)
console.log(dir);

// extension of path
const ext = path.extname(filePath)
console.log(ext);

// absolute path
const absolute = path.resolve('document', 'notes', 'example.pdf')
console.log(absolute)