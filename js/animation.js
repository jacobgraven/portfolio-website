document.addEventListener('DOMContentLoaded', () => {
    const typeTime = 92;       // time (ms) delay between each character (includes deleting)
    // const delTime = 920;
    const displayTime = 4000;  // time (ms) that completed message stays on screen
    const restartTime = 1000;  // time (ms)
    const permanentMessage = true; // when true, the animation will not loop (no delete)
    const element = document.getElementById('welcome-text-type');               // document element

    // const messages = ['Hi! My name is Jacob Graven!', 'Welcome to my web-folio :P', 'Feel free to look around, don\'t be shy!'];
    const messages = ['Get off my site you monk monk monkey-brained motherfucker!!!!!!!!', '......scram you buffoon!'];
    let msgIndex = 0;
    let charIndex = 0;
    function animateTyping(reversed) {

        if (reversed) {
            // element.textContent = message.slice(0, charIndex);
            element.textContent = messages[msgIndex].slice(0, charIndex);

            charIndex--;

            if (charIndex < 0) {
                // msgIndex = (msgIndex + 1) % messages.length;
                if (msgIndex != messages.length - 1) {
                    msgIndex++;
                } else {
                    msgIndex = 0;
                }

                setTimeout(function () {
                    animateTyping(false);
                }, restartTime);
            } else {
                setTimeout(function () {
                    animateTyping(true);
                }, typeTime);
            }
        } else {
            // element.textContent = message.slice(0, charIndex + 1);
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


document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('welcome-text-fade');
    function animateFade() {
        element.classList.add('fade-in');
      }
    
      setTimeout(() => {
        element.style.opacity = '1';
        animateFade();
      }, 4700);
  });
