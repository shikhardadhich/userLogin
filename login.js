// login.js

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values entered by the user
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate the username and password
    if (username === 'admin' && password === 'password') {
        displayMessage('Success', 'You are now logged in!');
    } else {
        displayMessage('Error', 'Invalid username or password');
    }
}

// Function to display a message
function displayMessage(type, message) {
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = message;
    messageElement.style.color = (type === 'Success') ? 'green' : 'red';
}

// Add event listener to the form submission
document.getElementById('loginForm').addEventListener('submit', handleFormSubmit);
