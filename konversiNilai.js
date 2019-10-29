const konversi = val => {
    if (val >= 75) {
        return 'A';
    } else if (val >= 70) {
        return 'AB';
    } else if (val >= 65) {
        return 'B';
    } else if (val >= 60) {
        return 'BC';
    } else if (val >= 55) {
        return 'C';
    } else if (val >= 40) {
        return 'D';
    } else if (val > 0){
        return 'E';
    } else {
        return 'not valid';
    }
}

module.exports = konversi;