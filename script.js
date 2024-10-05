document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.outer-circle');
    skillBars.forEach(skillBar => {
        const percentage = parseInt(skillBar.querySelector('.percent').innerText, 10);
        skillBar.style.background = `conic-gradient(blueviolet 0%, blueviolet ${percentage}%, black ${percentage}%)`;
    });
});
const projectCards = document.querySelectorAll('.project-card');
let currentSlide = 0;

function showSlide(index) {
    projectCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

// script.js

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
