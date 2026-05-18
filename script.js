// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
menuBtn?.addEventListener('click', () => {
    alert('Mobile menu functionality would expand here!');
    // You can implement a slide-out menu here
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Simulation
const contactForm = document.querySelector('form');
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! We have received your message and will contact you shortly.');
    contactForm.reset();
});


// Project Display Toggle
const completedBtn = document.getElementById('completed');
const ongoingBtn = document.getElementById('onGoing');


const displayComplete = document.getElementById('displayComplete');
const displayOngoing = document.getElementById('displayOngoing');

// Set the default state when the page loads (e.g., hide ongoing projects initially)
displayOngoing.classList.add('hidden');

// 3. Add click event listener for the Completed Projects button
completedBtn?.addEventListener('click', () => {
    // Show Completed, Hide Ongoing
    displayComplete.classList.remove('hidden');
    displayOngoing.classList.add('hidden');
});

// 4. Add click event listener for the On-going Projects button
ongoingBtn?.addEventListener('click', () => {
    // Show Ongoing, Hide Completed
    displayOngoing.classList.remove('hidden');
    displayComplete.classList.add('hidden');
});