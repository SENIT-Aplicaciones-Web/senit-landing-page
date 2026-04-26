import { translations } from "./translations.js";

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Mensaje enviado");
    alert("Mensaje enviado");
});

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector("#navbar-options");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expanded);
});