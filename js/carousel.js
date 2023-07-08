// document.addEventListener("DOMContentLoaded", function() {
//   const carouselContainer = document.querySelector(".carousel-container");
//   const carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));
//   const prevArrow = document.querySelector(".arrow.prev");
//   const nextArrow = document.querySelector(".arrow.next");
//   let currentSlide = 0;
//   let slideInterval;

//   function goToSlide(slideIndex) {
//     carouselSlides.forEach(slide => slide.classList.remove("active"));
//     carouselSlides[slideIndex].classList.add("active");
//     currentSlide = slideIndex;
//   }

//   function showNextSlide() {
//     clearInterval(slideInterval);
//     if (currentSlide === carouselSlides.length - 1) {
//       goToSlide(0);
//     } else {
//       goToSlide(currentSlide + 1);
//     }
//     slideInterval = setInterval(showNextSlide, 5000);
//   }

//   function showPreviousSlide() {
//     clearInterval(slideInterval);
//     if (currentSlide === 0) {
//       goToSlide(carouselSlides.length - 1);
//     } else {
//       goToSlide(currentSlide - 1);
//     }
//     slideInterval = setInterval(showNextSlide, 5000);
//   }

//   nextArrow.addEventListener("click", showNextSlide);
//   prevArrow.addEventListener("click", showPreviousSlide);

//   slideInterval = setInterval(showNextSlide, 5000);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const carouselContainer = document.querySelector(".carousel-container");
//   const carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));
//   const prevArrow = document.querySelector(".arrow.prev");
//   const nextArrow = document.querySelector(".arrow.next");
//   let currentSlide = 0;
//   let slideInterval;

//   function goToSlide(slideIndex) {
//     carouselSlides.forEach(slide => slide.classList.remove("active", "prev", "next"));
//     carouselSlides[slideIndex].classList.add("active");
//     carouselSlides[(slideIndex - 1 + carouselSlides.length) % carouselSlides.length].classList.add("prev");
//     carouselSlides[(slideIndex + 1) % carouselSlides.length].classList.add("next");
//     currentSlide = slideIndex;
//   }

//   function showNextSlide() {
//     goToSlide((currentSlide + 1) % carouselSlides.length);
//   }

//   function showPreviousSlide() {
//     goToSlide((currentSlide - 1 + carouselSlides.length) % carouselSlides.length);
//   }

//   nextArrow.addEventListener("click", showNextSlide);
//   prevArrow.addEventListener("click", showPreviousSlide);
//   // Auto-scroll every 5 seconds (10000 milliseconds)
//   slideInterval = setInterval(showNextSlide, 3000);

//   carouselContainer.addEventListener("mouseover", function () {
//     clearInterval(slideInterval);
//   });

//   carouselContainer.addEventListener("mouseout", function () {
//     slideInterval = setInterval(showNextSlide, 10000);
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const carouselContainer = document.querySelector(".carousel-container");
  const carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));
  const prevArrow = document.querySelector(".arrow.prev");
  const nextArrow = document.querySelector(".arrow.next");
  const contentBoxes = Array.from(document.querySelectorAll(".content-box"));
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

  nextArrow.addEventListener("click", showNextSlide);
  prevArrow.addEventListener("click", showPreviousSlide);

  function startSlideInterval() {
    slideInterval = setInterval(showNextSlide, 3000); // Auto-scroll every 10 seconds (10000 milliseconds)
  }

  function stopSlideInterval() {
    clearInterval(slideInterval);
  }

  function handleContentBoxHover() {
    if (slideInterval) {
      this.style.borderColor = "red";

      stopSlideInterval();
    }
    this.style.borderColor = "red";
  }

  function handleContentBoxLeave() {
    if (!slideInterval) {
      startSlideInterval();
    }
    this.style.borderColor = "";
  }

  startSlideInterval();

  contentBoxes.forEach(contentBox => {
    contentBox.addEventListener("mouseenter", handleContentBoxHover);
    contentBox.addEventListener("mouseleave", handleContentBoxLeave);
  });
});

