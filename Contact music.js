function submitForm(event) {
    event.preventDefault(); // Prevent page refresh on form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form data
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate form submission (for demo purposes)
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear form fields after submission
    document.getElementById('contactForm').reset();
}
