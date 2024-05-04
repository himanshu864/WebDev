let arr = [1, 3, 5, 6, 9];
console.log(arr);

// Map
// let mapped_arr = arr.map((value, index, array) => {
let mapped_arr = arr.map(e => {

    return e ** 2;
});
console.log(mapped_arr);

// Filter:
// Can use external function
let greaterThan4 = e => {
    return e > 4;
}
console.log(arr.filter(greaterThan4));

// Reduce:
let sum_array = arr.reduce((a, b) => { return a + b; });
console.log(sum_array);
