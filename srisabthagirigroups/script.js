// script.js
// Placeholder for future interactivity (e.g., menu, property filtering)

// Gallery slider functionality
const galleryImages = document.querySelectorAll('.gallery-img');
let currentGallery = 0;

function showGalleryImage(index) {
    galleryImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextGalleryImage() {
    currentGallery = (currentGallery + 1) % galleryImages.length;
    showGalleryImage(currentGallery);
}

if (galleryImages.length > 0) {
    setInterval(nextGalleryImage, 3000); // Change image every 3 seconds
}

// Projects carousel functionality
const projectCarouselImages = document.querySelectorAll('.projects-carousel-img');
let currentProjectCarousel = 0;

function showProjectCarouselImage(index) {
    projectCarouselImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextProjectCarouselImage() {
    currentProjectCarousel = (currentProjectCarousel + 1) % projectCarouselImages.length;
    showProjectCarouselImage(currentProjectCarousel);
}

if (projectCarouselImages.length > 0) {
    setInterval(nextProjectCarouselImage, 3000); // Change image every 3 seconds
}

// EMI Calculator functionality
const emiForm = document.getElementById('emi-form');
if (emiForm) {
    emiForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const principal = parseFloat(document.getElementById('loan-amount').value);
        const annualRate = parseFloat(document.getElementById('interest-rate').value);
        const years = parseFloat(document.getElementById('loan-tenure').value);
        const monthlyRate = annualRate / 12 / 100;
        const n = years * 12;
        // EMI formula
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
        const resultDiv = document.getElementById('emi-result');
        if (isFinite(emi)) {
            resultDiv.textContent = `Your EMI is ₹${emi.toFixed(2)} per month.`;
        } else {
            resultDiv.textContent = 'Please enter valid values.';
        }
    });
} 