const openButtons = document.querySelectorAll("[data-modal-target]");
const closeButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const contactme = document.getElementById(button.getAttribute("data-modal-target"));
        openContact(contactme);
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const contactme = button.closest(".contactme");
        closeContact(contactme);
    });
});

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".contactme.active");
    modals.forEach(contactme => closeContact(contactme));
});

function openContact(contactme) {
    if (contactme == null) return;
    contactme.classList.add("active");
    overlay.classList.add("active");
}

function closeContact(contactme) {
    if (contactme == null) return;
    contactme.classList.remove("active");
    overlay.classList.remove("active");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  });
});
