const fs = require('fs');

// // The fs module in Node.js provides a way to interact with the file system on your computer. It allows you to perform various operations like reading, writing, creating, updating, deleting files and directories. It's a core module, which means you don't need to install it separately; it's built into Node.js.




// // reading file
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// // writing file
// fs.writeFile('file.txt', 'Hello, im node!', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File has been written.');
// });

// // checking file existence
// if (fs.existsSync('file.txt')) {
//     console.log('File exists.');
// } else {
//     console.log('File does not exist.');
// }


// // Create new file
// fs.mkdir('greatDir', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Directory created successfully.');
// });

// // fs.unlink('new.txt', (err) => {
// //     if (err) {
// //         console.error(err);
// //         return;
// //     }
// //     console.log('File deleted successfully.');
// // });

// fs in class

// fs.mkdir('./src/assets/text.txt', { recursive: true } , (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Directory created successfully.');
// })

// fs.rename('./src/assets/text.txt', './src/assets/prem.txt', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File renamed successfully.');
// } )

// fs.writeFile('./src/assets/text.txt', 'Hello, im fs node!', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File has been written.');
// })

// fs.appendFile('./src/assets/text.txt', ' Node 2.0', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File has been written.');
// })

// fs.unlink('', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File deleted successfully.');
// })