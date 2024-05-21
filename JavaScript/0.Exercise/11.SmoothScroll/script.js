const audi = document.getElementById("boink");
const up = document.querySelector(".up");
const homePage = document.querySelector(".home");

up.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reload audio on click
    audi.pause();
    audi.currentTime = 0;
    audi.play();
});

// Shows scroll to top if home page not intersecting
const isHomeObserver = new IntersectionObserver(entries => {
    const home = entries[0];
    up.classList.toggle("show", !home.isIntersecting);
}, {
    threshold: 0.5,
});

isHomeObserver.observe(homePage);
