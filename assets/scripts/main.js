import { translations } from "./translations.js";

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();
        console.log("Mensaje enviado");
        alert("Mensaje enviado");

    });

}

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector("#navbar-options");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expanded);
});

const enBtn = document.querySelector("#en-btn");
const esBtn = document.querySelector("#es-btn");

function setLanguage(language) {

    const textElements = document.querySelectorAll("[data-i18n]");

    textElements.forEach(element => {

        const key = element.dataset.i18n;
        const translation = translations[language][key];        

        if (translation) {
            element.innerHTML = translation;
        }

    })

}

enBtn.addEventListener("click", () => {
    setLanguage("en_US");
});

esBtn.addEventListener("click", () => {
    setLanguage("es_419");
});