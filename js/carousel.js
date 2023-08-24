document.addEventListener("DOMContentLoaded", () => {
    const slidesContainer = document.getElementById("slideContainer");
    const slide = document.getElementById("slideContainer").querySelector(".slide");
    const prevButton = document.getElementById("slideArrowPrev");
    const nextButton = document.getElementById("slideArrowNext");
    const maxSlide = document.getElementById("slideContainer").children.length;
    // const slideWidth = slide.clientWidth;
    let currSlide = 1;
    let isEnabled = true;

    nextButton.addEventListener("click", (e) => {
        e.preventDefault();
        const slideWidth = slide.clientWidth;

        if (isEnabled) {
            isEnabled = false;

            if (prevButton.classList.contains("arrow-disabled") && currSlide == 1) {
                prevButton.classList.remove("arrow-disabled");
            }

            if (slidesContainer.scrollLeft + slidesContainer.offsetWidth < slidesContainer.scrollWidth) {
                slidesContainer.scrollLeft += slideWidth;
                currSlide++;
            }

            if (currSlide == maxSlide) {
                nextButton.classList.add("arrow-disabled");
            }

            setTimeout(() => {
                isEnabled = true;
            }, 1000);
        }
    });

    prevButton.addEventListener("click", (e) => {
        e.preventDefault();
        const slideWidth = slide.clientWidth;

        if(isEnabled) {
            isEnabled = false;

            if (nextButton.classList.contains("arrow-disabled") && currSlide == maxSlide) {
                nextButton.classList.remove("arrow-disabled");
            }

            if (slidesContainer.scrollLeft > 0) {
                slidesContainer.scrollLeft -= slideWidth;
                currSlide--;
            }

            if (currSlide == 1) {
                prevButton.classList.add("arrow-disabled");
            }

            setTimeout(() => {
                isEnabled = true;
            }, 1000);
        }
    });
});
