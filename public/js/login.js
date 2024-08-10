const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // TO DO: Add validation and authentication logic here
    // For demonstration purposes, we'll just display an error message
    errorMessage.textContent = 'Invalid username or password';
});