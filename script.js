
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {
    alert('Yay! I am so excited! I wanna meet you, I am so happy❤️🫶');
});

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

function moveButton(e) {
    const maxX = window.innerWidth - e.target.offsetWidth;
    const maxY = window.innerHeight - e.target.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    e.target.style.position = 'fixed';
    e.target.style.left = randomX + 'px';
    e.target.style.top = randomY + 'px';
}

noBtn.addEventListener('click', () => {
    noBtn.textContent = 'Yes';
    noBtn.style.backgroundColor = 'var(--yes-color)';
    alert('Great choice! Looking forward to our date!');
});

// // JavaScript code


// window.addEventListener('load', function() {
//     // Create the alert element
//     const alert = document.createElement('div');
//     alert.classList.add('alert');
//     alert.textContent = 'Welcome to our website! Please read the terms and conditions before proceeding.';

//     // Create the dismiss button
//     const dismissButton = document.createElement('button');
//     dismissButton.classList.add('dismiss-button');
//     dismissButton.textContent = 'Dismiss';

//     // Add the dismiss button to the alert
//     alert.appendChild(dismissButton);

//     // Append the alert to the body
//     document.body.appendChild(alert);

//     // Add event listener to the dismiss button
//     dismissButton.addEventListener('click', function() {
//       // Remove the alert from the body
//       document.body.removeChild(alert);
//     });

//     // Prevent the page from loading until the alert is dismissed
//     document.body.style.display = 'none';

//     // Show the alert after a short delay to allow the page to load
//     setTimeout(function() {
//       document.body.style.display = 'block';
//     }, 1000); // Adjust the delay as needed
//   });

// JavaScript code


// JavaScript code
window.addEventListener('load', function () {
    // Display the alert
    const alert = document.getElementById('alert');
    alert.style.display = 'block';

    // Add event listener to the dismiss button
    const dismissButton = document.getElementById('dismiss-button');
    dismissButton.addEventListener('click', function () {
        // Hide the alert
        alert.style.display = 'none';

        // Show the content
        const content = document.getElementById('content');
        content.style.display = 'block';

        // Prevent the page from scrolling
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // Restore scrolling after a short delay
        setTimeout(function () {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }, 500); // Adjust the delay as needed
    });
});