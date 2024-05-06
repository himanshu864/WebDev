/*
document.getElementById("push").onclick = function () {
    document.getElementById("boxing").classList.toggle("red");
}
*/

/*
document.getElementById("push").addEventListener('click', function () {
    document.body.classList.toggle("batman");
    this.classList.toggle("robin");
});
 */

let button = document.querySelector("#push");
let btext = document.querySelector(".mod-text");
let bcircle = document.querySelector(".circle");

function iambatman() {
    document.body.classList.toggle("batman");
    button.classList.toggle("robin");

    if (button.style.flexDirection == "row-reverse") {
        btext.innerHTML = "LIGHT MOD";
        button.style.flexDirection = "row";
        button.style.padding = "0 10px 0 0";
        bcircle.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 0px 10px";
    }
    else {
        btext.innerHTML = "DARK MOD";
        button.style.flexDirection = "row-reverse";
        button.style.padding = "0 0 0 10px";
        bcircle.style.boxShadow = "rgb(255 0 0 / 70%) 0px 0px 10px";
    }
}