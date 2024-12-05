document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("bookingForm");
  
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const formData = new FormData(bookingForm);
  
      console.log("Form submitted with the following data:");
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
  
      const confirmationMessage = document.createElement("div");
      confirmationMessage.textContent = "Thank you! Your delivery booking has been submitted successfully.";
      confirmationMessage.style.padding = "10px";
      confirmationMessage.style.marginTop = "20px";
      confirmationMessage.style.backgroundColor = "#d4edda";
      confirmationMessage.style.color = "#155724";
      confirmationMessage.style.border = "1px solid #c3e6cb";
      confirmationMessage.style.borderRadius = "5px";
  
      bookingForm.parentElement.appendChild(confirmationMessage);
  
      setTimeout(() => {
        confirmationMessage.remove();
      }, 5000);
  
      bookingForm.reset();
    });
  });