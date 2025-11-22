
// Simple front-end form handler (no server)
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thanks! Message captured locally. Implement server endpoint to receive messages.');
    this.reset();
});
