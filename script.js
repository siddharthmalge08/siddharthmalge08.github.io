// Mobile menu toggle (your existing behaviour)
function toggleMenu() {
  const m = document.getElementById('menu');
  if (!m) return;
  if (m.style.display === 'flex') m.style.display = 'none';
  else m.style.display = 'flex';

  m.style.flexDirection = 'column';
  m.style.background = 'rgba(255,255,255,0.95)';
  m.style.padding = '12px';
  m.style.borderRadius = '8px';
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const statusEl = document.getElementById("formStatus");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        statusEl.textContent = "Sending...";

        // Convert form data to URLSearchParams (GAS understands this)
        const formData = new FormData(form);
        const params = new URLSearchParams(formData);

        fetch("https://script.google.com/macros/s/AKfycbzNaZyte3H8Jv0noY6A3AMCi254UWdnUwIo3q6H5ww3wesvfzHzNy0bIbRoj3d6d-Vl/exec", {
            method: "POST",
            body: params,   // NOT formData
            mode: "no-cors"
        })
        .then(() => {
            statusEl.textContent = "Your enquiry has been sent successfully.";
            form.reset();
        })
        .catch((error) => {
            console.log(error);
            statusEl.textContent = "Error sending message. Please try again later.";
        });
    });
});
