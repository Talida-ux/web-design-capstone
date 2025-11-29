// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Carousel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

showImage(currentIndex);

// Contact form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === '' || email === '' || message === '') {
        alert('Please fill out all fields!');
        return;
    }
    alert('Message sent successfully!');
    form.reset();
});
