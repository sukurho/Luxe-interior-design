const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const navButtons = document.querySelector(".nav-buttons");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navButtons.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =======================
// DARK MODE
// =======================

const darkModeToggle = document.getElementById("darkModeToggle");

// Check if dark mode was previously enabled
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
}

// Toggle dark mode
darkModeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");
        darkModeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        darkModeToggle.textContent = "🌙";

    }

});

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

const hiddenElements = document.querySelectorAll(
".service-card, .project-card, .choose-card, .process-card, .testimonial-card, .designer-card, .mission-card, .award-card, .stats-box, .faq-item, .contact-form, .contact-info"
);

hiddenElements.forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});