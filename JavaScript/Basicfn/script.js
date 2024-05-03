console.log("Welcome Artoriax");

let obj = {
    name: "Himanshu",
    role: "Game Developer",
    salary: 9999999
}

for (const key in obj) {
    const element = obj[key];
    console.log(key + ": " + element);
}

for (const c of obj.name) {
    console.log(c);
}

function fn(x, y = 5) {
    console.log(x + y);
}

fn(2, 6);
fn(10);
fn();

const square = (x) => {
    return x * x;
};
console.log(square(3));

