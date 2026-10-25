// CIT331 - Assignment 1: Web Technologies
// File: js/register.js - Form handling and localStorage

// 1. Get references to DOM elements
const form = document.getElementById("registrationForm");
const confirmationMessage = document.getElementById("confirmationMessage");
const registrationsList = document.getElementById("registrationsList");
const clearAllBtn = document.getElementById("clearAllBtn");
const noDataText = document.getElementById("noDataText");

// 2. Function to load and render saved registrations from localStorage
function displayRegistrations() {
    // Read JSON string from localStorage and parse into an array
    const savedData = JSON.parse(localStorage.getItem("clubRegistrations")) || [];
    registrationsList.innerHTML = "";

    if (savedData.length === 0) {
        noDataText.style.display = "block";
        return;
    }

    noDataText.style.display = "none";
    savedData.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.fullName}</td>
            <td>${item.studentEmail}</td>
            <td>${item.phoneNumber}</td>
            <td>${item.eventSelect}</td>
            <td>${item.ticketCount}</td>
            <td>${item.referral}</td>
        `;
        registrationsList.appendChild(row);
    });
}

// 3. Handle Form Submit
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop default browser page reload

    // Create a new registration object from form values
    const newRegistration = {
        fullName: document.getElementById("fullName").value.trim(),
        studentEmail: document.getElementById("studentEmail").value.trim(),
        phoneNumber: document.getElementById("phoneNumber").value.trim(),
        eventSelect: document.getElementById("eventSelect").value,
        ticketCount: document.getElementById("ticketCount").value,
        referral: document.querySelector('input[name="referral"]:checked').value
    };

    // Save to localStorage as a JSON string
    const existingList = JSON.parse(localStorage.getItem("clubRegistrations")) || [];
    existingList.push(newRegistration);
    localStorage.setItem("clubRegistrations", JSON.stringify(existingList));

    // Show confirmation message and refresh the displayed table
    confirmationMessage.textContent = `Thank you, ${newRegistration.fullName}! Your registration for "${newRegistration.eventSelect}" is confirmed.`;
    confirmationMessage.style.display = "block";
    form.reset();
    displayRegistrations();
});

// 4. Handle "Clear all" button click
clearAllBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to remove all saved registrations?")) {
        localStorage.removeItem("clubRegistrations");
        confirmationMessage.style.display = "none";
        displayRegistrations();
    }
});

// 5. Initial load when page opens
displayRegistrations();
