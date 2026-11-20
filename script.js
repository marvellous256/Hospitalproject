// Appointment form
const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("This demo form is not connected to the hospital's scheduling system. No appointment request was sent. Please contact the hospital to book.");
    });
}

// Contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you for contacting Mulago Hospital!");

        contactForm.reset();
    });
}
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}

if (document.getElementsByClassName("mySlides").length > 0) {
    showSlides();
}