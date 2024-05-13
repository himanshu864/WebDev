console.log("Hello");

setTimeout(() => {
    console.log("Himanshu");
}, 0);

setTimeout(() => {
    console.log("Aggarwal");
}, 0);

console.log("world");

const callback = (arg) => {
    console.log(arg);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    // sc.onload = callback("Harry");
    sc.onload = () => {
        callback("Harry");
    }
    document.head.append(sc);
}

loadScript("temp.js", callback);
