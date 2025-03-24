document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    
    let emailInput = document.getElementById("email").value;
    
    if (emailInput.trim() !== "") {
        document.getElementById("success-message").classList.remove("hidden");
        document.getElementById("signup-form").reset(); // Clear input field
    }
});
