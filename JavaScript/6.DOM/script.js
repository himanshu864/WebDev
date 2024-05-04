document.title = "DOM and BOM";

console.log("Get element by class and ID");

let bj = document.getElementsByClassName("box");
console.log(bj);

bj[2].style.backgroundColor = "green";

document.getElementById("redkrdopls").style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "pink";

document.querySelectorAll(".box").forEach(e => { e.style.borderColor = "blue" });

console.log(document.getElementsByTagName("div"));

console.log(`2nd index box contains red id: ${bj[2].matches("#redkrdopls")}`);
console.log(`3rd index box contains red id: ${bj[3].matches("#redkrdopls")}`);

// console.log(bj[0].closest("body"));
console.log(bj[0].closest(".container"));

console.log(document.querySelector(".container").contains(bj[0]));
console.log(document.querySelector(".container").contains(document.body));
