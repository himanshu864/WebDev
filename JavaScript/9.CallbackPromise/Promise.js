console.log("Never break a Promise...");

let p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        let a = Math.random();
        if (a < 0.5) {
            reject("Bad luck dood~");
        }
        else {
            resolve("Task Successful!");
        }
    }, 2000);
})

p1.then(a => {
    console.log(a);
}).catch(e => {
    console.log(e);
})

let p2 = new Promise((resolve, reject) => {
    let internet = false;
    if (internet) {
        resolve("Connected!");
    }
    else {
        reject("Disconnected~");
    }
})

let p3 = new Promise((resolve, reject) => {
    let age = 20;
    if (age < 18) {
        reject("You're under arrest!");
    }
    else {
        resolve("Cheers Mate~");
    }
})

Promise.all([p1, p3]).then(msgs => {
    console.log(msgs);
}).catch(() => {
    console.log("I'm Saaary");
})

Promise.allSettled([p1, p2, p3]).then(msgs => {
    console.log(msgs);
}).catch(() => {
    console.log("I'm Saaary");
})

let turbo = Promise.race([p1, p2, p3]);
turbo.then(msg => {
    console.log(`Fastest: ${msg}`);
}).catch(() => {
    console.log("Fastest: You Lose!");
})

Promise.any([p1, p2, p3]).then(msg => {
    console.log(`Fastest Winner: ${msg}`);
}).catch(() => {
    console.log("All loosers!");
})

// Promise.resolve(p1).then(a => {
//     console.log(a);
// }).catch(e => {
//     console.log(e);
// });

// Promise.reject(p1).then(a => {
//     console.log(a);
// }).catch(e => {
//     console.log(e);
// });
