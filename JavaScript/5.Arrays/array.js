let arr = [1, 2, 3, "Himanshu", [4, 5]];

console.log(arr);
console.log("length: ", arr.length);
console.log("type of: ", typeof arr);

console.log();
console.log("tostring(): ", arr.toString());

console.log();
console.log(arr.join(" and "));

console.log();
console.log("pop(): ", arr.pop()); // returns popped element
console.log(arr);

console.log("push(10): ", arr.push(10)); // returns altered length of array
console.log(arr);

console.log("shift(): ", arr.shift()); // returns first element that's shifted
console.log(arr);

console.log("unshift(Malik): ", arr.unshift("Malik")); // adds element to front
console.log(arr);

console.log();
console.log("Deleting index 2"); // leaves empty space
delete arr[2];
console.log(arr);

console.log();
let a1 = [1];
let a2 = [2, 3];
let a3 = [4, 5];

console.log("concat a1: ", a1.concat(a2, a3)); // returns a new array
console.log(a1); // original remains the same
a1 = a1.concat(a2, a3);
console.log(a1);

console.log();
console.log("splicing 3 from 1: ", a1.splice(3, 3)); // to remove 3 elements from index 1. displays popped
console.log(a1);

console.log("adding via splicing at 1: ", a1.splice(1, 0, 10, 20, 30)); // starting index, number of elements you want to delete, followed by elements you want to add
console.log(a1); // here no elements delete, only insert at index 1


console.log(a1.slice(3)); // created new array from starting index 3
console.log(a1.slice(1, 3)); // created new array from starting index 1(included) to 3(excluded)
console.log(a1);

console.log();
a1.reverse();
console.log(a1)
a1.sort(); // optional comparitor. wrong output as perceived as string not int
console.log(a1);
