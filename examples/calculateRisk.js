var qrisk2 = require('qrisk2-2014');

var args = {
    age: 30,
    b_AF: 0,
    b_ra: 0,
    b_renal: 0,
    b_treatedhyp: 0,
    b_type1: 0,
    b_type2: 0,
    bmi: 25,
    ethrisk: 1,
    fh_cvd: 0,
    rati: 1,
    sbp: 120,
    smoke_cat: 0,
    surv: 10,
    town: 0
};

var risk = qrisk2.male(args);

console.log('10 year cardiovascular risk = ', risk.score, '%');
console.log(risk);