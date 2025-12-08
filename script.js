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

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbzNaZyte3H8Jv0noY6A3AMCi254UWdnUwIo3q6H5ww3wesvfzHzNy0bIbRoj3d6d-Vl/exec", {
        method: "POST",
        body: formData,   // ⬅️ prevents CORS preflight
        mode: "no-cors"   // ⬅️ required for Apps Script
    })
    .then(() => {
        document.getElementById("status").textContent =
            "Your enquiry has been sent successfully.";
    })
    .catch(err => {
        console.error(err);
        document.getElementById("status").textContent =
            "Error sending message. Please try again later.";
    });
});
