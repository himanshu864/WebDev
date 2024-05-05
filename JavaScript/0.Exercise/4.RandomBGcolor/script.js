console.log("Welcome to random color generator");

let q = document.querySelector(".container").children;

function getRandomColor() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return `rgb(${x}, ${y}, ${z})`;
}

for (let e of q) {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
}

// let q = document.querySelectorAll(".box");
// q.forEach(e => {
//     let x1 = Math.floor(Math.random() * 255);
//     let x2 = Math.floor(Math.random() * 255);
//     let y1 = Math.floor(Math.random() * 255);
//     let y2 = Math.floor(Math.random() * 255);
//     let z1 = Math.floor(Math.random() * 255);
//     let z2 = Math.floor(Math.random() * 255);
//     e.style.backgroundColor = `rgb(${x1}, ${y1}, ${z1})`;
//     e.style.color = `rgb(${x2}, ${y2}, ${z2})`;
// });
