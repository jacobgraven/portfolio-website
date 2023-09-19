window.onbeforeunload = function() {
    // Remove the body to prevent DOM flash
    document.body.remove();
    window.scrollTo(0,0);x
};

document.addEventListener("DOMContentLoaded", () => {
    // Allow scroll after animations //
    window.setTimeout(() => {
        document.body.style.overflowY = "scroll";
    }, 2500) 

    // Section smooth scrolling //
    const links = document.querySelectorAll("nav #scrollNav a");
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetID = link.getAttribute("data-target");
            const target = document.querySelector(targetID);
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Animate on view //
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const image = entry.target.querySelector("#educationInfo img");
            const text = entry.target.querySelector("#educationInfo p");
            if(entry.isIntersecting) {
                image.classList.add("animate__animated");
                image.classList.add("animate__fadeInLeft");
                image.classList.remove("hidden");

                text.classList.add("animate__animated");
                text.classList.add("animate__fadeInRight");
                text.classList.remove("hidden");
                return;
            }
        });
    }, {threshold: 0.75});
    
    observer.observe(document.querySelector("#educationSection")); 
});