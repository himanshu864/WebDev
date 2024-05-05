console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".container").innerHTML);

console.log(document.querySelector(".box").outerHTML);
console.log(document.querySelector(".container").outerHTML);

console.log(document.querySelector(".box").tagName);
console.log(document.querySelector(".box").localName);

console.log(document.querySelector(".box").textContent);
console.log(document.querySelector(".container").textContent);


// document.querySelectorAll(".box")[0].hidden = true;

document.querySelectorAll(".box")[1].innerHTML = "Javascript Invasion";

console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
document.querySelector(".box").setAttribute("style", "display:block;");
document.querySelector(".box").removeAttribute("style");
console.log(document.querySelector(".box").attributes);

let div = document.createElement("div");
// div.setAttribute("class", "created");
div.className = "created";
div.innerHTML = "created and inserted using <b> JS.com </b>";
console.log(div.outerHTML);

document.querySelector(".container").append(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".container").replaceWith(div);

document.querySelector(".container").insertAdjacentHTML("afterbegin", "<strong> how's it going bros </strong>");

document.querySelector("#boxing").remove();


console.log(document.querySelector(".container").className);

document.querySelector(".container").classList.add("idkdude");
document.querySelector(".container").classList.remove("red");
document.querySelector(".container").classList.toggle("push");

console.log(document.querySelector(".container").className);

document.querySelector(".container").classList.toggle("push");
console.log(document.querySelector(".container").className);