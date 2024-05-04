// For Each
let arr = [6, 3, 1, 2, 5, 4];

console.log();
arr.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

// For In
let obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log();
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

// For of
console.log();
for (const i of arr) {
    console.log(i);
}

