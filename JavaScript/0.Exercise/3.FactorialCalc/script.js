/*
let a = parseInt(prompt(`Enter a x: `));

let arr = [];
for (let i = 1; i <= a; i++)
    arr.push(i);

let fact = arr.reduce((a, b) => { return a * b; });
alert(`${a}! = ${fact}`);
*/

// /*
let num = parseInt(prompt("Enter a number: "));

let factorial = Array.from({ length: num }, (_, index) => index + 1)
    .reduce((a, b) => a * b, 1);

alert(`${num}! = ${factorial}`);
// */

/*
let a = 5;
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys()); // creates array from 0 to 5
    arr.shift(); // pop first 0. 1 to 5
    console.log(arr.reduce((a, b) => a * b)); // multiply using reduce 1*2*3*4*5 = 120
}
factorial(a);
*/