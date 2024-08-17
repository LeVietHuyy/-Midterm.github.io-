import './Midterm.css';
import logo from './logo.png';
import 'Midten.html';
// Function to add smooth scrolling to navbar links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to add a fade-in effect when sections appear in the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.slide-in').forEach(section => {
    observer.observe(section);
});

// Function to highlight the current section in the navbar
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.querySelector('a').getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});

// Function to open social media links in a new tab
document.querySelectorAll('.social-icons a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(this.href, '_blank');
    });
});

// Function to add a hover effect to the images in the "Hình ảnh" section
document.querySelectorAll('#img .img-fluid').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});
