let colors = ["red", "green", "blue", "yellow", "crismon", "slateblue", "aqua", "DarkViolet", "orange", "Yellowgreen"];
document.querySelectorAll(".box").forEach(e => {
    let r = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    e.style.backgroundColor = colors[r];
    e.style.color = colors[b];
});
