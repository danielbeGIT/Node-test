/**
 * Calc stuff
 */


const geo = require('./modules/geometry');
const num = require('./modules/num');

// console.log("geo", geo)

let radius = 4;
let area = geo.area(radius);
let circumference = geo.circumference(radius);

let approxArea = num.round(area, 8); // 8 decimals
// let approxArea = num.round(area, 2); // 2 decimals

console.log(`The area of a circle with radius ${radius} is:`, area);
console.log(`The approx. area of a circle with radius ${radius} is:`, approxArea);

console.log(`The circumference of a circle with radius ${radius} is:`, circumference);

// console.log("Approx pie:", num.round(Math.PI, 5));

radius = 1337;

// let circ = geo.circumference(radius);
// let approxCirc = num.round(circ, 3);

let approxCirc = geo.approxCircumference(radius, 3);
console.log(`The approx circumference of a circle radius ${radius} is:`, approxCirc)