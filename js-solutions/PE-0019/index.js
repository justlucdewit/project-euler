const { time, yearIsLeap } = require("../common");

time(() => {
    monthLengths = {
        0: 31, // JAN
        1: 28, // FEB
        2: 31, // MAR
        3: 30, // APR
        4: 31, // MAY
        5: 30, // JUN
        6: 31, // JUL
        7: 31, // AUG
        8: 30, // SEP
        9: 31, // OKT
        10: 30,// NOV
        11: 31 // DEC
    }

    let dayI = 1;
    let sundayCount = 0;
    for (let year = 1901; year < 2001; year++) {
        for (let month = 0; month < 12; month++) {
            if (dayI === 6)
                sundayCount++;

            dayI = (dayI + monthLengths[month] + (month === 1 && yearIsLeap(year))) % 7;
        }
    }

    console.log(sundayCount);
});