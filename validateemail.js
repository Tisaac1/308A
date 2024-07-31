function validateEmailvalidateEmail() {
    const emailInput = document.getElementById('email');
    const validationMessage = document.getElementById('validation-message');

    // Regular expression for a simple email validation
    const emailRegex = "/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";

    if
     (emailRegex.test(emailInput.value)) {
        validationMessage.textContent = '';
        alert('Thank you for joining us!');
      } else {
        validationMessage.textContent = 'Invalid email address';
      }
    }