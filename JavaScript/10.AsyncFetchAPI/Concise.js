// const delay = sec => new Promise(resolve => setTimeout(() => resolve(`${sec} second(s) later...`), sec * 1000))

// let x = async (a, b) => {
//     console.log(await delay(a));
//     console.log(await delay(b));
// };

// x(2, 1);

const delay = sec => {
    return new Promise((resolve, reject) => {
        if (typeof sec === 'number' && sec >= 0) {
            setTimeout(() => resolve(`> ${sec} second(s) later...`), sec * 1000);
        }
        else {
            reject(new Error('Invalid Input!'));
            // reject("> ERROR: Invalid Input!");
        }
    })
}

let x = async (a, b) => {
    console.log("k");

    try {
        console.log(await delay(a));
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        // console.log(error);
    }

    console.log("kk");

    try {
        console.log(await delay(b));
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        // console.log(error);
    }

    console.log("kkk");
};

console.log("Program starts");
x(2, 1);
// x("bo", 2);
console.log("Program ends");
