console.log("I am running");

var a = 5;
var b = "Himanshu";
let d = 3.55;
const e = true;
let f = undefined;
let g = null;

console.log(a + 8);
console.log(typeof a, typeof b, typeof d, typeof e, typeof f, typeof g);

let c = 10;

{
    var a = 15;
    let c = 20;
    console.log("a: " + a);
    console.log("c: " + c);
}

console.log("a: " + a);
console.log("c: " + c);

let o = {
    "name": "Himanshu",
    "salary": 999999,
    "is_sexy": true
}

console.log(o);
o.rollno = "007";
console.log(o);
