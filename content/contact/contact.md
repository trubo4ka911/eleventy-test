---
layout: layouts/base.njk
eleventyNavigation:
  key: Contact
  order: 4
---

<h1 class="title">Contact</h1>

<p class="intro-text">
    If you have any questions, suggestions, or just want to say hello, feel free to get in touch with me.
</p>

<div class="contact-info">
    Email: <a class="contact-link" href="mailto:your.email@example.com">your.email@example.com</a><br>
    LinkedIn: <a class="contact-link" href="https://www.linkedin.com/in/trubnikovaanna/" target="_blank">LinkedIn Profile</a><br>
    GitHub: <a class="contact-link" href="https://github.com/trubo4ka911" target="_blank">GitHub Profile</a>
</div>

<p class="response-time">
    I usually respond within 24 hours. Looking forward to hearing from you!
</p>
  <div class="container mt-5">
    <!-- Contact Form -->
    <form id="my-form" action="https://formspree.io/f/xleyqbok" method="POST">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName" name="firstName" required>
      </div>
      <div class="form-group">
        <label for="surname">Surname</label>
        <input type="text" class="form-control" id="surname" name="surname" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
      </div>
      <div class="form-check mb-2">
        <input type="checkbox" class="form-check-input" id="terms" required>
        <label class="form-check-label" for="terms">Agree to terms and conditions</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  <!-- Success Message Container -->
<div id="formSuccessMessage" class="alert alert-success" style="display:none;">
  Your message has been sent successfully!
</div>
  </div>
  </div>
   <!-- Include the full jQuery library -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

<!-- AJAX Form Submission Script -->
<script>
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("formSuccessMessage");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          status.style.display = 'block'; // Show the success message
          form.reset(); // This will clear all the fields
          setTimeout(function() {
            status.style.display = 'none'; // Hide the success message after 4 seconds
          }, 4000);
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form";
            }
          });
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
</script>

<!-- Bootstrap JS and its dependencies -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
