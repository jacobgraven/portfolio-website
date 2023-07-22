// Page Refresh Events (scroll to top)
window.onbeforeunload = function () {
    document.getElementById("landing-img").remove();
    document.getElementById("landing-header").remove();
    document.getElementById("landing-text").remove();

    window.scrollTo(0, 0);
};

// Content (DOM) Load Events
document.addEventListener("DOMContentLoaded", () => {
    // Link smooth scrolling
    const links = document.querySelectorAll("nav a");
    const scrollMargin = 15; // scroll Xvh above the clicked section
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const href = link.getAttribute("href");
            const targetSection = document.querySelector(href);

            window.scrollTo({
                top:
                    targetSection.offsetTop -
                    (scrollMargin * window.innerHeight) / 100, // - 5 * window.innerHeight / 100  ==> 5vh above section
                behavior: "smooth",
            });
        });
    });
});

// Page Load Events
window.addEventListener("onload", () => {
    // ...
});
