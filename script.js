function toggleMenu(){
  const m = document.getElementById('menu');
  if(!m) return;
  if(m.style.display==='flex') m.style.display='none'; else m.style.display='flex';
  m.style.flexDirection='column';
  m.style.background='rgba(255,255,255,0.95)';
  m.style.padding='12px';
  m.style.borderRadius='8px';
}
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.textContent = 'Sending...';
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
      fetch("https://script.google.com/macros/s/AKfycbzSwBIL4cSlIFXlnrWlxwYDuS75PyDkp59bvI6O2HcpSR2TGAGWdCLoYcpr6oJiM2N0/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ name, email, phone, message })
    })
      .then(() => {
        // We can't read the response in no-cors mode, but the request was sent
        status.textContent = 'Thanks — your enquiry has been received.';
        form.reset();
      })
      .catch(err => {
        console.error(err);
        status.textContent = 'Error sending message. Please try again later.';
      });
    });
  });
