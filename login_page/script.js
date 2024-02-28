  // Function to show the login form
  function showLoginForm() {
    // Hide the buttons
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });

    // Show the login form only if it's not already visible
    var loginForm = document.getElementById('loginForm');
    if (loginForm.style.display !== 'block') {
        loginForm.style.display = 'block';
    }
  }

  // Function to redirect to new page
  function redirectToNewPage() {
    // Redirect to a new page
    window.location.href = "training_page/index.html";
  }

  // Wait for the DOM to be loaded before attaching event listener
  document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the login button
    var loginButton = document.querySelector("#loginForm button[type='submit']");
    
    // Add click event listener to the login button
    loginButton.addEventListener("click", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Call the function to redirect to the new page
      redirectToNewPage();
    });

    // Get references to the buttons with class 'button'
    var buttons = document.querySelectorAll('.button');
    
    // Add click event listener to each button
    buttons.forEach(function(button) {
      button.addEventListener("click", function(event) {
        // Prevent the default button behavior
        event.preventDefault();
        
        // Call the function to show the login form
        showLoginForm();
      });
    });
  });