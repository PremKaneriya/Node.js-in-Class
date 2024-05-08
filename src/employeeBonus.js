const handleEmployeeBonus = (bonus) => {
    if (bonus <= 10000) {
        return bonus * 0.10;
    } else if (bonus <= 20000) {
        return 10000 * 0.10 + (bonus - 10000) * 0.15;
    } else {
        return 10000 * 0.10 + 10000 * 0.15 + (bonus - 20000) * 0.20;
    }
};

module.exports = (bonus, callback) => {
    if (bonus < 0) {
        callback(new Error('Bonus cannot be negative'));
    } else {
        callback(null, handleEmployeeBonus(bonus));
    }
};
