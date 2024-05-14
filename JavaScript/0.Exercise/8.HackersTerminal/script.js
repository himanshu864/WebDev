let prompts = [
    "Initializing hacking",
    "Reading data",
    "Passwords Detected",
    "Sending personal files to server",
    "Clearing data",
    "System Hacked!"];

function createtext(msg) {
    return new Promise((resolve, reject) => {
        let sec = Math.ceil(Math.random() * 7) * 1000;
        setTimeout(() => {
            let loadhtml = `<div><span>${msg}</span><span class="blinking"></span></div>`;
            document.body.insertAdjacentHTML("beforeend", loadhtml);
            resolve();
        }, sec);
    })
}

async function hacking() {
    for (let msg of prompts) {

        let loader = document.querySelector(".blinking");
        if (loader) {
            // Ensure the current loader continues to blink

            const dotadd = setInterval(() => {
                loader.append(".");
            }, 500);
            const dotclear = setInterval(() => {
                loader.innerText = "";
            }, 2000)

            await createtext(msg);

            // Stop blinking for the current loader and update its text
            clearInterval(dotadd);
            clearInterval(dotclear);
            loader.innerText = " - SUCCESS";
            loader.classList.remove("blinking");
        }
        else {
            await createtext(msg);
        }
    }
}

hacking();
