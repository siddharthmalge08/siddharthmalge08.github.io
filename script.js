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

// Contact form handler
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (status) status.textContent = 'Sending...';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Build URL-encoded form data
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    fetch("https://script.google.com/macros/s/AKfycbzNaZyte3H8Jv0noY6A3AMCi254UWdnUwIo3q6H5ww3wesvfzHzNy0bIbRoj3d6d-Vl/exec", {
      method: "POST",
      body: formData
      // no custom headers → simple POST, no preflight problems
    })
      .then(r => r.json())
      .then(res => {
        if (res.status === 'success') {
          if (status) status.textContent = 'Thanks — your enquiry has been received.';
          form.reset();
        } else {
          if (status) status.textContent = 'There was a problem. Please try again later.';
        }
      })
      .catch(err => {
        console.error(err);
        if (status) status.textContent = 'Error sending message. Please try again later.';
      });
  });
});
