function validateLogin(event) {
    event.preventDefault(); // Prevent page refresh on form submission

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (email === "" || password === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate login process (for demo purposes)
    if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        // Redirect to the user's library or home page
        window.location.href = "library.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
