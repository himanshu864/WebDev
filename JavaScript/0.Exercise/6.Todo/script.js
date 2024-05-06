let enteredText = document.getElementById("add-text");

function pushtask() {
    if (enteredText.value == "")
        alert("Cmon dude");
    else {
        let newcard = document.createElement("div");
        newcard.innerHTML = enteredText.value;
        document.querySelector(".card-here").append(newcard);
    }
}