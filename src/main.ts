// *****************************************************************************
// * Natural Logarithm
// *****************************************************************************

// e = 2.7182818284590452353602874713527
// (e = euler's number -- a constant number
// base e
// ln (e) = 1
const e2 = Math.E * Math.E * Math.E * Math.E * Math.E; // e to power of 5
let ln = Math.log(e2); // ln e^x = x
console.log(ln); // ==> 5 

const ln10 = 10 * 10 * 10; // 10 to power of 3
ln = Math.log10(ln10); // ln 10^x = x
console.log(ln); // ==> 3

const pow = Math.pow(10, 3); // 10^3
console.log(`${ln10} = ${pow}`); // ==> 1000 = 1000

const powE = Math.pow(Math.E, 5); // e^5
console.log(`${e2} = ${powE}`); // ==> 148.41315910257657 = 148.41315910257657
console.log('-----------------------------------------------------------------');

// *******************************************************************************
// * Compare results between "base e" and "base 10" logarithm
// *******************************************************************************
// base e logarithm
// ln(x * y) = ln x + ln y
let x = 1;
let y = 2;
const lnxy = Math.log(x * y);
const lnxlny = Math.log(x) + Math.log(y);
console.log(`${lnxy} = ${lnxlny}`); // ==> 0.6931471805599453 = 0.6931471805599453

// base 10 logarithm
// ln(x * y) = ln x + ln y
const lnxy10 = Math.log10(x * y);
const lnxlny10 = Math.log10(x) + Math.log10(y);
console.log(`${lnxy10} = ${lnxlny10}`); // ==> 0.3010299956639812 = 0.3010299956639812

console.log('-----------------------------------------------------------------');
// *******************************************************************************
// * Difference between exponential and logarithmic form
// *******************************************************************************
// * exponential form
let b = 2;
let x_fromExponentForm = 3;
// b^x = y
// 2^3 (read as 2 to power of 3) exponent = 3
// 2^3 = 2 x 2 x 2 = 8
y = Math.pow(b, x_fromExponentForm);
console.log(y); // ==> 8

// * logarithmic form
// logb y = x
// log2 8 = 3
let x_fromLogarithmicForm = Math.log2(y);
console.log(`${x_fromLogarithmicForm} == ${x_fromExponentForm}`); // ==> 3 == 3


console.log('-----------------------------------------------------------------');

const quoOfExpFromBase_e = Math.log(500) / Math.log(1000);
const quoOfExpFromBase10 = Math.log10(500) / Math.log10(1000);
const quoOfExpFromBase_2 = Math.log2(500) / Math.log2(1000);
console.log(quoOfExpFromBase_e); // ==> 0.8996566681120063
console.log(quoOfExpFromBase10); // ==> 0.8996566681120063
console.log(quoOfExpFromBase_2); // ==> 0.8996566681120063

const expFromBase_e = Math.log(1000);
const expFromBase10 = Math.log10(1000);
const expFromBase_2 = Math.log2(1000);
console.log(expFromBase_e); // ==> 6.907755278982137
console.log(expFromBase10); // ==> 3
console.log(expFromBase_2); // ==> 9.965784284662087

console.log('-----------------------------------------------------------------');
// *****************************************************************************
// * Translate and shorten numbers (e.g. number of views) (i.e. 2.5k views)
// *****************************************************************************

// ln e^x = x
// x --> exponent
// e --> base number

// quotient of the 2 exponents can be used as index to get an array item
// ln x / ln y = index
const suffixes = ['k', 'm', 'b', 't', 'q'];

// k ==> 1                            ln 1k / ln 1000 = 1 (dividing the exponents will result to 1 as quotient)
// m ==> 1 000 000                    ln 1m / ln 1000 = 2 (dividing the exponents will result to 2 as quotient)
// b ==> 1 000 000 000                ln 1b / ln 1000 = 3
// t ==> 1 000 000 000 000            ln 1t / ln 1000 = 4
// q ==> 1 000 000 000 000 000        ln 1q / ln 1000 = 5

// Let's change suffix for every power of 1,000 th
// 1k = 1000 = 1k
// 1k * 1000 = 1m
// 1m * 1000 = 1b
// 1b * 1000 = 1t
// 1t * 1000 = 1q

const million = Math.pow(1000, 2); // 1000^2 (or 1000 * 1000)
console.log('1 million =', million); // ==> 1000000 or 1m

let views = 1000000; // 1 million
console.log(Math.log(views)); // ==> 13.815510557964274
console.log(Math.log(1000)); // ==> 6.907755278982137

// ln x / ln 1000 --> can be used as index to get suffix

console.log(Math.log(views) / Math.log(1000)); // ==> 2

console.log(25.815123456.toFixed(2)); // ==> 25.82
console.log(25.814123456.toFixed(2)); // ==> 25.81

views = million + 250001; // 1 250 001

const abc = views / million;
const xyz = (views / million).toFixed(2);
console.log(abc); // ==> 1.250001
console.log(xyz); // ==> 1.25 

const quotientOfExponents = Math.floor(Math.log(views) / Math.log(1000));
console.log(quotientOfExponents); // ==> 2

const totalViews = xyz + suffixes[quotientOfExponents - 1];
console.log(totalViews); // ==> 1.25m

function completeFormula(n: number) {
    const quotientOfExps = Math.floor(Math.log(n) / Math.log(1000));
    const result = (n / Math.pow(1000, quotientOfExps)).toFixed(2) + suffixes[quotientOfExps - 1];
    console.log(result);
}

completeFormula(1234567890); // ==> 1.23b