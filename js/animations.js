// Page Refresh //
window.onbeforeunload = function () {
    // preemptively remove these elements to prevent them from flashing on screen
    document.getElementById("landingSVG").remove();
    document.getElementById("landingHeader").remove();
    document.getElementById("landingText").remove();
    window.scrollTo(0, 0);
};

// Section Scroll (#scrollNav) //
document.addEventListener("DOMContentLoaded", () => {
    // moves the page above the selected section by (scrollMargin)vh
    const scrollMargin = 0;
    const sectionLinks = document.querySelectorAll("nav a");
    sectionLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const href = link.getAttribute("href");
            const targetSection = document.querySelector(href);
            window.scrollTo({
                top: targetSection.offsetTop - (scrollMargin * window.innerHeight) / 100,
                behavior: "smooth"
            });
        });
    });
});


// Prevent Scroll (for animations) //
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function() {
        document.body.style.overflowY = 'visible';
    }, 4250);
});