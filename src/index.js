// const rect = require('./rectangle')
const calculateBonus = require('./employeeBonus');

// console.log('Area Of Rectangle', '=>', rect.areaOfRectangle(10, 30))
// console.log('Parameter of Rectangle' , '=>', rect.perimeterOfRectangle(10, 20))

// const solveAllProbs = (w, h) => {
//     if (w <= 0 || h <= 0) {
//         console.log(new Error('Lenght is below 0'));
//     } else {
//         console.log(rect.areaOfRectangle(h, w));
//         console.log(rect.perimeterOfRectangle(h, w));
//     }
// }

// solveAllProbs(10, 20)

// rect(20, 40, (err, area, perimeter) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Area Of Rectangle', '=>', area);
//         console.log('Parameter of Rectangle' , '=>', perimeter);
//     }
// })


calculateBonus(30000, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Salary with bonus:', result);
    }
});



