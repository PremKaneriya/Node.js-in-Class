const express = require('express');
const app = express();
const instituteRoutes = require('./Routes/v1/institute');
const categoryRouter = require('./Routes/v1/category')

app.use('/api/v1/institute', instituteRoutes);
app.use('/api/v1/category', categoryRouter);

app.listen(3000, () => {
    console.log(`routing on port 3000...`);
});








// const express = require('express')
// const instituteRoutes = require('./Routes/v1/institute') 

// const app = express();

// app.use('/institute', instituteRoutes)

// app.get('/institute', (req, res) => {
//     res.send('institute get')
// })

// app.post('/institute', (req, res) => {
//     res.send('institute post')
// })

// app.put('/institute', (req, res) => {
//     res.send('institute put')
// })

// app.delete('/institute', (req, res) => {
//     res.send('institute delete')
// })

// app.listen(3000, () => {
//     console.log('Listening on port 3000...')
// })

















// // const rect = require('./rectangle')
// const salary = require('./employeeBonus');

// // console.log('Area Of Rectangle', '=>', rect.areaOfRectangle(10, 30))
// // console.log('Parameter of Rectangle' , '=>', rect.perimeterOfRectangle(10, 20))

// // const solveAllProbs = (w, h) => {
// //     if (w <= 0 || h <= 0) {
// //         console.log(new Error('Lenght is below 0'));
// //     } else {
// //         console.log(rect.areaOfRectangle(h, w));
// //         console.log(rect.perimeterOfRectangle(h, w));
// //     }
// // }

// // solveAllProbs(10, 20)

// // rect(20, 40, (err, rectObj) => {
// //     if (err) {
// //         console.log(err.message);
// //     } else {
// //         console.log('Area of Rectangle:', rectObj.area());
// //         console.log('Perimeter of Rectangle:', rectObj.perimeter());
// //     }
// // });

// salary(10000, (err, bonus) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log('Bonus:', bonus);
//     }
// });