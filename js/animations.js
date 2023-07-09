// Typing Text Animation //
document.addEventListener('DOMContentLoaded', () => {
    const typeTime = 65;       // time (ms) delay between each character (includes deleting)
    const delTime = 35;
    const displayTime = 10000;  // time (ms) that completed message stays on screen
    const restartTime = 1000;  // time (ms)
    const permanentMessage = false; // animation will not loop (delete/retype) if this is true
    const element = document.getElementById('welcome-text-type'); // doc element
    const messages = ['Get off my site you monk monk monkey-brained motherfucker!!!!!!!!', '......scram you buffoon!'];
    let msgIndex = 0;
    let charIndex = 0;
    function animateTyping(reversed) {

        if (reversed) {
            element.textContent = messages[msgIndex].slice(0, charIndex);
            charIndex--;

            if (charIndex < 0) {
                msgIndex = (msgIndex + 1) % messages.length;
                setTimeout(function () {
                    animateTyping(false);
                }, restartTime);
            } else {
                setTimeout(function () {
                    animateTyping(true);
                }, delTime);
            }
        } else {
            element.textContent = messages[msgIndex].slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === messages[msgIndex].length && permanentMessage) {     // message.length
                // terminate animation loop (permanentMessage = true)
                return;
            } else if (charIndex === messages[msgIndex].length && !permanentMessage) {
                setTimeout(function () {
                    animateTyping(true);
                }, displayTime);
            } else {
                setTimeout(function () {
                    animateTyping(false);
                }, typeTime);
            }
        }
    }
    // begin the animation loop
    animateTyping(false);
});


// Fading text animation
document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('welcome-text-fade');
    function animateFade(disabled=false) {
        if (!disabled) {
            element.classList.add('fade-in');
        }
    }

    setTimeout(() => {
        element.style.opacity = '1';
        animateFade();
    }, 4700);
});

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
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Add event listener for scroll to update the active navbar link
    window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;

        // Remove the active class from all navbar links
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Add the active class to the corresponding navbar link based on the section in view
        navLinks.forEach(navLink => {
            const targetSectionId = navLink.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            if (targetSection.offsetTop <= currentScrollPos && targetSection.offsetTop + targetSection.offsetHeight > currentScrollPos) {
                navLink.classList.add('active');
            }
        });
    });
});