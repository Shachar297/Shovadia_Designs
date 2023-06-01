const
    rightMergedElements = document.querySelectorAll(".right-margin"),
    leftMergedElements = document.querySelectorAll(".left-margin"),
    sendMailButton = document.getElementById("get-started-btn"),
    serverUrl = "https://187f-2a06-c701-4ed4-7200-38d8-5132-555-23ab.ngrok-free.app/mail/";

function init() {
    setListeners();
    initMail();
}

function setListeners() {
    rightMergedElements.forEach(element => {
        element.addEventListener('click', (e) => {
            e = e.target;
            e.style.transform = `scale(2.5, 2.5)`;
            setTimeout(() => {
                e.style.transform = `scale(1, 1)`;
            }, 3500)
        })
    })
    leftMergedElements.forEach(element => {
        element.addEventListener('click', (e) => {
            e = e.target;
            e.style.transform = `scale(2.5, 2.5)`;
            setTimeout(() => {
                e.style.transform = `scale(1, 1)`;
            }, 3500)
        })
    })
}

function initMail() {
    sendMailButton.addEventListener('click', () => {
        fetch(serverUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ hasMail: false, mail: "", subject: "", message: "" })
        })
    })
}
init();