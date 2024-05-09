const fs = require('fs');

// The fs module in Node.js provides a way to interact with the file system on your computer. It allows you to perform various operations like reading, writing, creating, updating, deleting files and directories. It's a core module, which means you don't need to install it separately; it's built into Node.js.


// 1. Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});


// 2. Writing to a file
const content = 'Hello, Node.js!';

fs.writeFile('example.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
});


// 3. Creating a directory
fs.mkdir('documents', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully!');
});


// 4. Renaming a file
fs.rename('example.txt', 'new-example.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed successfully!');
})


// 5. Deleting a file
fs.unlink('example.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully!');
});