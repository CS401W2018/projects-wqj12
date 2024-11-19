document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
        agree: document.getElementById("agree").checked,
        gender: document.querySelector("input[name='gender']:checked")?.value,
        country: document.getElementById("country").value,
        dob: document.getElementById("dob").value,
        command: document.getElementById("Command").value,
    };

    const errors = [];

    if (!formData.name) errors.push("Name is required.");
    if (!formData.password) errors.push("Password is required.");
    if (!formData.gender) errors.push("Gender selection is required.");
    if (formData.command.length > 100) errors.push("Command field must be less than 100 characters.");

    const errorContainer = document.getElementById("error-messages");
    errorContainer.innerHTML = "";

    if (errors.length > 0) {
        errors.forEach(error => {
            const errorParagraph = document.createElement("p");
            errorParagraph.textContent = error;
            errorContainer.appendChild(errorParagraph);
        });
        return;
    }

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "response.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = () => {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            alert(response.message);
            document.getElementById("myForm").reset();
        } else {
            alert("There was an error processing your request.");
        }
    };
    xhr.send(JSON.stringify(formData));
});