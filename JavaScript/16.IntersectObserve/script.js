const cards = document.querySelectorAll(".card");
const template = document.querySelector("[reels]");
const container = document.querySelector(".container");

// Create an observer to check if entry is intersecting or not
// And add show transition for first time it loads
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);

        // unobserve once entry is intersecting to avoid repititive transitions
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
        }
    });
},
    {
        threshold: 1, // to only return intersecting true when 100% element inside root
    }
);

// Add observer to initial cards
cards.forEach(card => observer.observe(card));

// Function to append new card
function doomscrolling() {
    const clone = template.content.cloneNode(true);
    const card = clone.firstElementChild;
    observer.observe(card); // don't forget to observe it for transition
    container.append(card);
}

// Callback function to handle infinite scrolling
const handleLazyScroll = entries => {
    const lastCard = entries[0]; // since only one entry

    if (lastCard.isIntersecting) {
        doomscrolling();
        lastCardObserver.unobserve(lastCard.target); // unobserve prev last element
        lastCardObserver.observe(document.querySelector(".card:last-child")); // obs new last element
    }
};

// Observe for infinite scrolling
const lastCardObserver = new IntersectionObserver(handleLazyScroll, { rootMargin: "150px" });

// observe initial last child
lastCardObserver.observe(document.querySelector(".card:last-child"));