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

document.getElementById('submitButton').addEventListener('click', function () {
    var form = document.getElementById('contactForm');
    
    if (form.checkValidity()) {
        // If all fields are valid, submit the form (you can add actual form submission logic here)
        alert('Form Submitted');
        form.reset(); // Optional: reset form after submission
    } else {
        // If form is not valid, trigger the HTML5 validation message
        form.reportValidity();
    }
});