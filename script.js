
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

// Close menu after selecting a section
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});

// Send selected pricing plan to WhatsApp
const whatsappNumber = "917542968959";

document.querySelectorAll(".request-plan").forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const plan = button.dataset.plan;
        const message =
            `Hello Indiaizone! I am interested in the ${plan}. Please share the details.`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
});
