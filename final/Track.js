document.addEventListener("DOMContentLoaded", function () {

    const trackButton = document.querySelector(".track-button");
    const trackingInput = document.querySelector(".tracking-input");
    const helpLink = document.querySelector(".help-link");
    const successMessage = document.querySelector(".tracking-success-message");

    trackButton.addEventListener("click", function () {
        const trackingNumbers = trackingInput.value.trim();
        
        if (!trackingNumbers) {
            alert("Please enter at least one tracking number.");
        } else {
            alert("Tracking numbers submitted: \n" + trackingNumbers);
            successMessage.style.display = "block";
            
            trackingInput.value = "";

            setTimeout(function () {
                successMessage.style.display = "none";
            }, 5000);
        }
    });

    helpLink.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Help is on the way! Check the 'Help' page or contact customer support.");
    });
});