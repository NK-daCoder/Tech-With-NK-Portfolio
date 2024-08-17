document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementsByClassName("dropdown-button")[0];
    const menu = document.getElementsByClassName("header-navigation")[0];

    toggleButton.addEventListener("click", () => {
        const expanded =toggleButton.getAttribute('aria-expanded') === "true";

        toggleButton.setAttribute("aria-expanded", !expanded);
        menu.setAttribute('aria-hidden', expanded);
    });
});


