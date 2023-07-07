document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            link.classList.add('active');

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

    window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;

        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        navLinks.forEach(navLink => {
            const targetSectionId = navLink.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            if (targetSection.offsetTop <= currentScrollPos && targetSection.offsetTop + targetSection.offsetHeight > currentScrollPos) {
                navLink.classList.add('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const introText = document.getElementById('intro-text');
    const messages = ['Hi Mom :)'];
    let currentMessageIndex = 0;
    let currentCharacterIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentMessage = messages[currentMessageIndex];

        if (isDeleting) {
            introText.textContent = currentMessage.slice(0, currentCharacterIndex);
            currentCharacterIndex--;

            if (currentCharacterIndex < 0) {
                isDeleting = false;
                currentMessageIndex = (currentMessageIndex + 1) % messages.length;
            }
        } else {
            introText.textContent = currentMessage.slice(0, currentCharacterIndex + 1);
            currentCharacterIndex++;

            if (currentCharacterIndex === currentMessage.length) {
                isDeleting = true;
                setTimeout(typeWriter, 15000);
                return;
            }
        }

        setTimeout(typeWriter, 100);
    }

    typeWriter();
});
