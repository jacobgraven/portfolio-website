// Page Refresh Reset //
//                    //
//                    //
window.onbeforeunload = function () {
    // remove elements to prevent DOM flash
    // document.getElementById("landingHeader").remove();
    // document.getElementById("landingText").remove();
    document.querySelector("#welcomeSection h1").remove();
    document.querySelector("#welcomeSection p").remove();
    // document.querySelector("#welcomeSection .headshot").remove();
    document.querySelector("#welcomeSection .placeholder-picture").remove();
    window.scrollTo(0, 0);
};

// Section Smooth Scrolling //
document.addEventListener("DOMContentLoaded", () => {
    // const links = document.querySelectorAll("nav #scrollNav a");
    const links = document.querySelectorAll("#scrollNav a");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");
            const target = document.querySelector(href);
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth",
            });
        });
    });
});

// Contact Form Clearing //
// document.querySelector("#contact-form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     e.target.elements.name.value = "";
//     e.target.elements.email.value = "";
//     e.target.elements.message.value = "";
// });