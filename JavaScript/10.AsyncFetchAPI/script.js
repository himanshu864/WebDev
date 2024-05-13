async function getdata() {
    // Stimulate getting data from a server
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(234);
    //     }, 2000);
    // })

    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    // let data = await x.text();
    console.log(data);
    return 0;
}

async function main() {
    console.log("Loading Packages...");
    console.log("Blah 1...");
    console.log("Blah 1...");
    let data = await getdata();
    console.log(data);
    console.log("Blah 3...");
    console.log("Blah 4...");
}

main();
