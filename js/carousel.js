document.addEventListener("DOMContentLoaded", () => {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.getElementById("slides-container").querySelector(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");

    let currSlide = 1;
    // let tmp = document.getElementById("")
    const maxSlide = document.getElementById("slides-container").children.length;



    nextButton.addEventListener("click", (e) => {
        e.preventDefault();
        const slideWidth = slide.clientWidth;

        if(prevButton.classList.contains("arrow-disabled") && currSlide == 1) {
            prevButton.classList.remove("arrow-disabled");
        }

        if (slidesContainer.scrollLeft + slidesContainer.offsetWidth < slidesContainer.scrollWidth) {
            slidesContainer.scrollLeft += slideWidth;
            currSlide++;
        } else {
            // console.log("test");
            // nextButton.classList.add("next-disabled");
            // slidesContainer.scrollTo(0, 0);
            // animate(nextButton); // nextButton.classList.toggle(".edge-anim");            
        }

        if(currSlide == maxSlide) {
            nextButton.classList.add("arrow-disabled");
        }

    });

    prevButton.addEventListener("click", (e) => {
        e.preventDefault();
        const slideWidth = slide.clientWidth;

        if(nextButton.classList.contains("arrow-disabled") && currSlide == maxSlide) {
            nextButton.classList.remove("arrow-disabled");
        }
        if (slidesContainer.scrollLeft > 0) {
            // currSlide--;
            // console.log(currSlide);
            slidesContainer.scrollLeft -= slideWidth;
            currSlide--;
        } else {
            // prevButton.classList.add("arrow-disabled");
            // console.log("test: prev max")
            // slidesContainer.scrollTo(slidesContainer.scrollWidth, 0);
            // slidesContainer.scrollTo(slidesContainer.scrollWidth, 0);
        }

        if(currSlide == 1) {
            prevButton.classList.add("arrow-disabled");
        }
    });
});