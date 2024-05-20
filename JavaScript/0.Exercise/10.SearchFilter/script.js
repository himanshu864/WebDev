// Creating global empty array to store user data and access template
const users = [];
const cardTemplate = document.querySelector("[card-template]");

// Self-invoking anonymous asyncronized function
(async () => {
    // Fetch API
    const file = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await file.json();

    // Creating user cards using template
    data.forEach(usr => {
        // Clone template to create data fregment with element as child
        const clone = cardTemplate.content.cloneNode(true);
        const content = clone.firstElementChild;
        const parent = document.querySelector(".user-cards");

        // Dynamically edit and append
        content.querySelector(".header").innerHTML = usr.name;
        content.querySelector(".body").innerHTML = usr.email;
        parent.append(content);

        // To access inserted card and push data into users[]
        users.push({ name: usr.name, email: usr.email, element: content });
    });

    /*
    // Using HTML insert
    data.forEach(usr => {
        const htmlCard = `<div class="card">
        <div class="header">${usr.name}</div>
        <div class="body">${usr.email}</div>
        </div>`;
        // Create card dynamically
        const parent = document.querySelector(".user-cards");
        parent.insertAdjacentHTML('beforeend', htmlCard);
        
        // To access inserted card and push data into users[]
        const card = parent.lastElementChild;
        users.push({ name: usr.name, email: usr.email, element: card });
    });
    */
})()

// Filter every time user changes search input
document.getElementById("search").addEventListener("input", e => {
    // string inside search bar
    const input = e.target.value.toLowerCase();

    users.forEach(user => {
        // For each user/card, check if input exists inside name or email
        const isVisible = user.name.toLowerCase().includes(input) || user.email.toLowerCase().includes(input);

        // TOGGLE WITH TWO ARGUMENTS : adds hide when not visible, and removes hide when visible
        user.element.classList.toggle("hide", !isVisible);
    })
})
