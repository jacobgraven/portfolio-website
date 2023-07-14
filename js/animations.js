// Return to top on refresh
window.onbeforeunload = function () {
    const elemnent1 = document.getElementById('');
    window.scrollTo(0, 0);
}


// Navbar scroll
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Add the active class to the clicked navbar link
            link.classList.add('active');

            // Remove the active class from all other navbar links
            navLinks.forEach(navLink => {
                if (navLink !== link) {
                    navLink.classList.remove('active');
                }
            });

            const targetSectionId = link.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            window.scrollTo({
                top: targetSection.offsetTop - 7.5 * window.innerHeight / 100,
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset; // scrollY // pageYOffset

        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        navLinks.forEach(navLink => {
            const targetSectionId = navLink.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);


        
            // if (targetSection.offsetTop - 7.5 * window.innerHeight / 100 <= currentScrollPos && targetSection.offsetTop + targetSection.offsetHeight - 7.5 * window.innerHeight / 100 > currentScrollPos) {
            //     navLink.classList.add('active');
            // }
        });
    });
});


// Typing text //
// document.addEventListener('DOMContentLoaded', () => {
//     const typeTime = 65;        // time (ms) delay between each character (includes deleting)
//     const delTime = 35;
//     const displayTime = 10000;  // time (ms) that completed message stays on screen
//     const restartTime = 1000;   // time (ms)
//     const permanentMessage = true; // animation will not loop (delete/retype) if this is true
//     const element = document.getElementById('welcome-text-type'); // doc element
//     const messages = ['Hello! This is placeholder text xO', '...example (2)'];
//     let msgIndex = 0;
//     let charIndex = 0;
//     function animateTyping(reversed) {

//         if (reversed) {
//             element.textContent = messages[msgIndex].slice(0, charIndex);
//             charIndex--;

//             if (charIndex < 0) {
//                 msgIndex = (msgIndex + 1) % messages.length;
//                 setTimeout(function () {
//                     animateTyping(false);
//                 }, restartTime);
//             } else {
//                 setTimeout(function () {
//                     animateTyping(true);
//                 }, delTime);
//             }
//         } else {
//             element.textContent = messages[msgIndex].slice(0, charIndex + 1);
//             charIndex++;

//             if (charIndex === messages[msgIndex].length && permanentMessage) {     // message.length
//                 // terminate animation loop (permanentMessage = true)
//                 return;
//             } else if (charIndex === messages[msgIndex].length && !permanentMessage) {
//                 setTimeout(function () {
//                     animateTyping(true);
//                 }, displayTime);
//             } else {
//                 setTimeout(function () {
//                     animateTyping(false);
//                 }, typeTime);
//             }
//         }
//     }
//     // begin the animation loop
//     animateTyping(false);
// });

// Fade-in text
// document.addEventListener('DOMContentLoaded', () => {
//     const element = document.getElementById('welcome-text-fade');
//     function animateFade(disabled = false) {
//         if (!disabled) {
//             element.classList.add('fade-in');
//         }
//     }

//     setTimeout(() => {
//         element.style.opacity = '1';
//         animateFade();
//     }, 4700);
// });