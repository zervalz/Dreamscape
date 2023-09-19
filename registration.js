document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Add validation logic here to check input values

        // Send registration data to the server for processing
        const userData = {
            username: username,
            email: email,
            password: password,
        };

        // Example: Send a POST request to your server to handle registration
        fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.ok) {
                    // Registration was successful, you can redirect the user or show a success message
                } else {
                    // Handle registration errors, e.g., duplicate email or server issues
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});

