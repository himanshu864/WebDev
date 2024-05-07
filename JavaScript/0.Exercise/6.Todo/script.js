let enteredText = document.getElementById("add-text");

function pushtask() {
    if (enteredText.value == "")
        alert("Cmon dude");
    else {
        let newcard = document.createElement("li");
        newcard.innerHTML = enteredText.value;
        newcard.className = "card";
        newcard.addEventListener("click", markpls);
        document.querySelector(".card-here").append(newcard);
    }
    enteredText.value = "";
}

function markpls() {
    this.classList.toggle("crossdat");
    this.classList.toggle("criminal");
}

function election() {
    document.querySelectorAll(".criminal").forEach(Element => {
        Element.remove();
    });
}