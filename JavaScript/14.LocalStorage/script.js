// Local Storage Prompt Name
let here = document.getElementById("hereugo");
let a = localStorage.getItem("name");

if (!a || a === "null") {
    a = prompt("Enter your name : ");
    localStorage.setItem("name", a);
}
here.append(`Welcome ${a}`);

// Session Storage counter button
let button = document.getElementById("meow");
let count = document.getElementById("counter");
let reset = document.getElementById("roar");
let clear = document.getElementById("safari");

if (!sessionStorage.clickcount) {
    sessionStorage.clickcount = 0;
}

count.innerHTML = Number(sessionStorage.clickcount);

button.addEventListener("click", () => {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    count.innerHTML = Number(sessionStorage.clickcount);
});

reset.addEventListener("click", () => {
    sessionStorage.clickcount = 0;
    count.innerHTML = Number(sessionStorage.clickcount);
});

clear.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
})

// Object as String
let obj = { "abc": 1, "xyz": 2 };
localStorage.setItem("ox", JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("ox")));

// Cookies
document.cookie = "name=Himanshu; expires=Sat, 18 May 9999 13:54:00 UTC";
console.log(document.cookie);
