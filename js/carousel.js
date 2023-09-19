document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("slideContainer");
    const prevButton = document.getElementById("slideArrowPrev");
    const nextButton = document.getElementById("slideArrowNext");
    const slideEle = container.querySelector(".slide");
    const maxSlide = container.children.length;
    let currSlide = 1;
    let isEnabled = true;

    nextButton.addEventListener("click", (e) => {
        e.preventDefault();
        const slideWidth = slideEle.clientWidth;

        if (isEnabled) {
            isEnabled = false;

            if (currSlide == maxSlide) {
                container.scrollLeft = 0;
                currSlide = 1;
            } else {
                container.scrollLeft += slideWidth;
                currSlide++;
            }

            setTimeout(() => {
                isEnabled = true;
            }, 750);
        }
    });

    prevButton.addEventListener("click", (e) => {
        e.preventDefault();
        const slideWidth = slideEle.clientWidth;

        if (isEnabled) {
            isEnabled = false;

            if (currSlide == 1) {
                container.scrollLeft = slideWidth * maxSlide;
                currSlide = maxSlide;
            } else {
                container.scrollLeft -= slideWidth;
                currSlide--;
            }

            setTimeout(() => {
                isEnabled = true;
            }, 750);
        }
    });

    window.onresize = function() {
        document.getElementById("slideContainer").scrollLeft = 0;
    }
});
