// ===============================
// NAVBAR MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});


// ===============================
// NAVBAR SCROLL
// ===============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


// ===============================
// ANIMASI SCROLL
// ===============================

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1500,
    reset: false,
};

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 700,
});

ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__container .header__btn", {
    ...scrollRevealOption,
    delay: 1300,
});

ScrollReveal().reveal(".socials li", {
    ...scrollRevealOption,
    delay: 1600,
    interval: 200,
});

ScrollReveal().reveal(".section__container h2", {
    ...scrollRevealOption,
    delay: 300,
});

ScrollReveal().reveal(".section__container > p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".card", {
    ...scrollRevealOption,
    delay: 300,
    interval: 200,
});


// ===============================
// BUY TICKET
// ===============================

const ticketPage = document.getElementById("buy-ticket-page");
const closeTicketBtn = document.getElementById("close-ticket");

// Semua tombol Buy Ticket
const buyButtons = document.querySelectorAll(".buy-ticket");

buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        ticketPage.style.display = "flex";
    });
});


// ===============================
// TUTUP TICKET
// ===============================

if (closeTicketBtn) {
    closeTicketBtn.addEventListener("click", () => {
        ticketPage.style.display = "none";
    });
}


// ===============================
// CONTACT US
// ===============================

const contactButtons = document.querySelectorAll(".contact-btn");

contactButtons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("📩 Terima kasih! Silakan hubungi kami.");
    });
});

