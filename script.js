// ===============================
// INTRO ANIMATION
// ===============================

const intro = document.querySelector(".intro");

function hideIntro() {
    if (intro) {
        intro.classList.add("hidden");
    }
}

// 3.5s delay + 1.2s slide animation
setTimeout(hideIntro, 4700);

if (intro) {
    intro.addEventListener("click", hideIntro);
}


// ===============================
// NAVBAR MENU
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const navOverlay = document.getElementById("nav-overlay");
const menuBtnIcon = menuBtn.querySelector("i");

function openMenu() {
    navLinks.classList.add("open");
    navOverlay.classList.add("active");
    menuBtnIcon.setAttribute("class", "ri-close-line");
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
}

function closeMenu() {
    navLinks.classList.remove("open");
    navOverlay.classList.remove("active");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
}

menuBtn.addEventListener("click", () => {
    if (navLinks.classList.contains("open")) {
        closeMenu();
    } else {
        openMenu();
    }
});

navOverlay.addEventListener("click", closeMenu);

navLinks.addEventListener("click", (e) => {
    if (e.target.closest("a, button")) {
        closeMenu();
    }
});


// ===============================
// SCROLL: NAVBAR, PROGRESS, BACK TO TOP
// ===============================

const nav = document.querySelector("nav");
const progressBar = document.getElementById("scroll-progress");
const backToTop = document.getElementById("back-to-top");

function onScroll() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    nav.classList.toggle("scrolled", scrollY > 50);
    backToTop.classList.toggle("show", scrollY > 600);
    progressBar.style.width = `${maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0}%`;
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ===============================
// ACTIVE NAV LINK
// ===============================

const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');
const sections = document.querySelectorAll("header[id], section[id]");

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navAnchors.forEach((a) => {
                a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`);
            });
        });
    },
    { rootMargin: "-45% 0px -50% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));


// ===============================
// CARD SPOTLIGHT
// ===============================

document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
});


// ===============================
// COUNTER STATS
// ===============================

function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const duration = 1800;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${prefix}${(target * eased).toFixed(decimals)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.6 }
);

document.querySelectorAll("[data-count]").forEach((el) => counterObserver.observe(el));


// ===============================
// ANIMASI SCROLL
// ===============================

if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
        distance: "50px",
        origin: "bottom",
        duration: 1200,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        reset: false,
    });

    sr.reveal(".header__eyebrow", { delay: 500 });
    sr.reveal(".header__container h1", { delay: 700 });
    sr.reveal(".header__meta", { delay: 900 });
    sr.reveal(".header__container p", { delay: 1100 });
    sr.reveal(".header__btn", { delay: 1300 });
    sr.reveal(".header__container .socials li", { delay: 1500, interval: 150 });

    sr.reveal(".section__header", { delay: 200 });
    sr.reveal(".about__image", { origin: "left", delay: 200 });
    sr.reveal(".about__content", { origin: "right", delay: 300 });
    sr.reveal(".stat", { delay: 400, interval: 150 });
    sr.reveal(".card", { delay: 200, interval: 150 });
    sr.reveal(".cta__container", { delay: 200, scale: 0.95 });
    sr.reveal(".contact__info", { origin: "left", delay: 200 });
    sr.reveal(".contact__form", { origin: "right", delay: 300 });
}


// ===============================
// TOAST
// ===============================

const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}


// ===============================
// BUY TICKET
// ===============================

const ticketPage = document.getElementById("buy-ticket-page");
const closeTicketBtn = document.getElementById("close-ticket");

function openTicketPage() {
    ticketPage.classList.add("open");
    document.body.classList.add("no-scroll");
}

function closeTicketPage() {
    ticketPage.classList.remove("open");
    document.body.classList.remove("no-scroll");
}

document.querySelectorAll(".buy-ticket").forEach((button) => {
    button.addEventListener("click", openTicketPage);
});

closeTicketBtn.addEventListener("click", closeTicketPage);

ticketPage.addEventListener("click", (e) => {
    if (e.target === ticketPage) {
        closeTicketPage();
    }
});

document.querySelectorAll(".select-ticket").forEach((button) => {
    button.addEventListener("click", () => {
        const type = button.dataset.type.toUpperCase();
        const price = parseInt(button.dataset.price, 10).toLocaleString("id-ID");
        closeTicketPage();
        showToast(`🎟️ Tiket ${type} (Rp ${price}) dipilih. Fitur pemesanan segera hadir!`);
    });
});


// ===============================
// ESC KEY
// ===============================

document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (ticketPage.classList.contains("open")) closeTicketPage();
    if (navLinks.classList.contains("open")) closeMenu();
});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    contactForm.querySelectorAll("input, textarea").forEach((field) => {
        const group = field.closest(".form__group");
        const ok = field.value.trim() !== "" && field.checkValidity();
        group.classList.toggle("error", !ok);
        if (!ok) valid = false;
    });

    if (!valid) {
        showToast("⚠️ Mohon lengkapi semua kolom dengan benar.");
        return;
    }

    contactForm.reset();
    showToast("📩 Terima kasih! Pesanmu sudah terkirim.");
});

contactForm.addEventListener("input", (e) => {
    e.target.closest(".form__group")?.classList.remove("error");
});
