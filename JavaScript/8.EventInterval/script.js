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

// Capture
document.querySelector(".child").addEventListener("click", () => {
    alert("Capture - Child was clicked!");
}, { capture: true });

document.querySelector(".childContainer").addEventListener("click", (e) => {
    alert("Capture - childContainer was clicked!");
}, { capture: true });

// Bubbling
document.querySelector(".child").addEventListener("click", () => {
    alert("Bubble - Child was clicked!");
});

document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Bubble - childContainer was clicked!");
});

document.querySelector(".container").addEventListener("click", () => {
    alert("Bubble - Container was clicked!");
});

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

// Globally console yo to divs
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector))
            callback(e);
    });
};

addGlobalEventListener("click", "div", () => console.log("yo div"));

// creating div dom
const created = document.createElement("div");
created.style.width = "100px";
created.style.height = "100px";
created.style.backgroundColor = "green";
document.body.append(created);
