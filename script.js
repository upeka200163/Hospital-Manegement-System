// Menu Bar Toggle
let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// Appointment Popup
const btn = document.querySelector(".right-icons .btn");
const popup = document.getElementById("appointmentPopup");
const closeBtn = document.getElementById("closePopup");
const form = document.getElementById("appointmentForm");

btn.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Appointment submitted successfully!");
    form.reset();
    popup.style.display = "none";
});
