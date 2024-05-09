
module.exports = (sal, bonus) => {
    if (sal <= 0) {
        bonus(new Error('Salary is below or equal to 0'));
    } else if (sal <= 10000) {
        bonus(null, sal * 0.10);
    } else if (sal <= 20000) {
        bonus(null, sal * 0.15);
    } else {
        bonus(null, sal * 0.20);
    }
}