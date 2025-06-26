// js/script.js

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.innerText = "Sending...";
  
    fetch(this.action, {
      method: this.method,
      body: new FormData(this),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerText = "Message sent!";
        this.reset();
      } else {
        response.json().then(data => {
          status.innerText = data.errors ? data.errors.map(err => err.message).join(", ") : "Oops! Something went wrong.";
        });
      }
    }).catch(error => {
      status.innerText = "Oops! Something went wrong.";
    });
  });
  