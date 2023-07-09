document.addEventListener("DOMContentLoaded", function() {
  const carouselContainer = document.querySelector(".carousel-container");
  const contentBoxes = Array.from(document.querySelectorAll(".content-box"));
  const carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));
  const prevArrow = document.querySelector(".arrow.prev");
  const nextArrow = document.querySelector(".arrow.next");
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(slideIndex) {
    carouselSlides.forEach(slide => slide.classList.remove("active", "prev", "next"));
    carouselSlides[slideIndex].classList.add("active");
    carouselSlides[(slideIndex - 1 + carouselSlides.length) % carouselSlides.length].classList.add("prev");
    carouselSlides[(slideIndex + 1) % carouselSlides.length].classList.add("next");
    currentSlide = slideIndex;
  }

  function showNextSlide() {
    goToSlide((currentSlide + 1) % carouselSlides.length);
  }

  function showPreviousSlide() {
    goToSlide((currentSlide - 1 + carouselSlides.length) % carouselSlides.length);
  }

  function startSlideInterval() {
    slideInterval = setInterval(showNextSlide, 5000); // Auto-scroll
  }

  nextArrow.addEventListener("click", showNextSlide);
  prevArrow.addEventListener("click", showPreviousSlide);
  startSlideInterval();

  // TODO: fix hover functions (hover should be stopping autoscroll but only while hovered)

  // function stopSlideInterval() {
  //   clearInterval(slideInterval);
  // }

  // function handleContentBoxHover() {
  //   if (slideInterval) {
  //     this.style.borderColor = "red";

  //     stopSlideInterval();
  //   }
  //   this.style.borderColor = "red";
  // }

  // function handleContentBoxLeave() {
  //   if (!slideInterval) {
  //     startSlideInterval();
  //   }
  //   this.style.borderColor = "";
  // }

  // contentBoxes.forEach(contentBox => {
  //   contentBox.addEventListener("mouseenter", handleContentBoxHover);
  //   contentBox.addEventListener("mouseleave", handleContentBoxLeave);
  // });
});

