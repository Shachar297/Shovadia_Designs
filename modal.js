var modal = document.getElementById("modal");
var openModalButton = document.getElementById("open-modal");
var closeModalButton = document.getElementsByClassName("close")[0];
var subscribeButton = document.getElementById("subscribe-button");

// Delay in milliseconds before opening the modal
var modalDelay = 5000; // 5 seconds

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listeners
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        closeModal();
    }
});

// Automatically open the modal after the specified delay
setTimeout(openModal, modalDelay);

// Subscribe button functionality
subscribeButton.addEventListener("click", function () {
    var emailInput = document.getElementById("email-input").value;
    if (emailInput !== "") {
        // Perform subscription logic here
        console.log("Subscribed with email:", emailInput);
        sendSubscribeMail(emailInput);
        closeModal();
    } else {
        alert("Please enter a valid email address.");
    }
});


function sendSubscribeMail(mailAddress) {
    const config = {
        subject: `Incoming Mail from Shovadia_Designs`,
        message: `Dear ${mailAddress}, Thank you for subscribing to Shovadia_Designs. \n We invite you to stay updated to all new coming soon!`
    }

    fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ hasMail: true, mail: mailAddress, subject: config.subject, message: config.message })
    })
}