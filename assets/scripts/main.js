import { translations } from "./translations.js";

const form = document.querySelector("form");
const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector("#navbar-options");
const enBtn = document.querySelector("#en-btn");
const esBtn = document.querySelector("#es-btn");
let currentLanguage = localStorage.getItem("senit-language") || "es_419";

function setLanguage(language) {
    const dictionary = translations[language] || translations.es_419;
    const textElements = document.querySelectorAll("[data-i18n]");

    textElements.forEach((element) => {
        const key = element.dataset.i18n;
        const translation = dictionary[key];

        if (translation) {
            element.innerHTML = translation;
        }
    });

    currentLanguage = language;
    localStorage.setItem("senit-language", language);
    document.documentElement.lang = language === "en_US" ? "en" : "es";
}

function showToast(message) {
    const previousToast = document.querySelector(".senit-toast");
    if (previousToast) previousToast.remove();

    const toast = document.createElement("div");
    toast.className = "senit-toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    window.setTimeout(() => toast.classList.add("visible"), 20);
    window.setTimeout(() => {
        toast.classList.remove("visible");
        window.setTimeout(() => toast.remove(), 250);
    }, 2800);
}

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = currentLanguage === "en_US"
            ? "Message sent. We will contact you soon."
            : "Mensaje enviado. Nos comunicaremos contigo pronto.";
        showToast(message);
        form.reset();
    });
}

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
        const expanded = menuBtn.getAttribute("aria-expanded") === "true";
        menuBtn.setAttribute("aria-expanded", String(!expanded));
    });

    navbar.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
}

if (enBtn) {
    enBtn.addEventListener("click", () => setLanguage("en_US"));
}

if (esBtn) {
    esBtn.addEventListener("click", () => setLanguage("es_419"));
}

setLanguage(currentLanguage);
