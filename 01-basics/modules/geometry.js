/**
 * Do all things geometry-related
 *
 * SUCH FUN!
 */

// Example
/*
const teacher = {
    firstName: "Johan",
    lastName: "Nordström",
    email: "some@thing.se",
}
const { email } = teacher;
console.log(email)
*/

const { PI } = Math;
const num = require('./num')

// πr^2
const area = r => PI * r ** 2;

// 2πr
const circumference = r => 2 * PI * r;

const approxArea = (r, precision) => num.round(area(r), precision);
const approxCircumference = (r, precision) => num.round(area(r), precision);

// Export stuff
module.exports = {
	area,
	circumference,
    approxArea,
    approxCircumference,
}
