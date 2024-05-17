// /*
// IIFE
async function sleep() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Done");
        }, 1000);
    })
}

let a = 1;
console.log(a);

(async () => {
    console.log("2");
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
    console.log("3");
})()

console.log(a);
// */

// /*
// Destructuring
let [x, , y, ...z] = [1, 4, 5, 7, 9];
console.log(x, y);
console.log(z);

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

function myVehicle({ type, color, brand, model }) {
    const msg = `My ${type} is a ${color} ${brand} ${model}.`;
    console.log(msg);
}

myVehicle(vehicleOne);
// */

// /*
// Spread Operator
const NewVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdatedVehicle = { ...NewVehicle, ...updateMyVehicle }
console.log(myUpdatedVehicle);
// */

// Hoisting
var p = 5;

sum(p, q);

var q = 7;

function sum(p, q) {
    console.log(p, q);
}
