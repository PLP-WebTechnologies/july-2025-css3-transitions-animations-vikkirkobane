// Function to trigger CSS animations
function triggerAnimation(element, animationClass) {
    element.classList.add(animationClass);
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, 1000); // Duration of the animation
}

// Button click to animate the box
document.querySelector('.animate-button').addEventListener('click', () => {
    const box = document.querySelector('.box');
    box.classList.toggle('fade-in'); // Toggle visibility
});

// Card flip on click
const card = document.querySelector('.card');
card.addEventListener('click', () => {
    card.classList.toggle('flipped');
});

// Loading animation based on user input
document.querySelector('.load-button').addEventListener('click', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('visible');
    setTimeout(() => {
        loader.classList.remove('visible');
    }, 2000); // 2 seconds loading
});
