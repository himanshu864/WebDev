// Mouse Event
let button = document.getElementById("bt");

button.addEventListener("click", changeAnime);

function changeAnime() {
    document.querySelector(".box").innerHTML = "Ashita no Joe";
    clearInterval(lights);
}

// Keyboard Event
document.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key == 'w') {
        document.body.style.backgroundColor = "red";
    }
    if (e.key == 's') {
        document.body.style.backgroundColor = "green";
    }
    if (e.key == 'a') {
        document.body.style.backgroundColor = "blue";
    }
    if (e.key == 'd') {
        document.body.style.backgroundColor = "yellow";
    }
})

// Bubbling
document.querySelector(".child").addEventListener("click", () => {
    alert("Child was clicked!");
})

document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation();
    alert("childContainer was clicked!");
})

document.querySelector(".container").addEventListener("click", () => {
    alert("Container was clicked!");
})

// Interval
function getRandomColor() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return `rgb(${x}, ${y}, ${z})`;
}

let lights = setInterval(() => {
    document.querySelector(".disco").style.backgroundColor = getRandomColor();
}, 100);
