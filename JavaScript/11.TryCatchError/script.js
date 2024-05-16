let a = prompt("Enter a : ");
let b = prompt("Enter b : ");

try {
    // Convert input strings to numbers
    a = parseFloat(a);
    b = parseFloat(b);

    // Check if inputs are valid numbers
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Invalid input");
    }

    // Check if b is zero
    if (b === 0) {
        throw new Error("Division by zero");
    } else {
        console.log(a / b);
    }
} catch (err) {
    if (err.message === "Division by zero") {
        console.log("Can't divide by zero, Silly");
    } else {
        console.log("Invalid input, please enter numbers");
    }
}
