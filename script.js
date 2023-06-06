const
    rightMergedElements = document.querySelectorAll(".right-margin"),
    leftMergedElements = document.querySelectorAll(".left-margin"),
    sendMailButton = document.getElementById("get-started-btn"),
    serverUrl = "https://8d60-2a06-c701-4ed2-2900-d109-ef40-3497-c956.ngrok-free.app/",
    selectElement = document.getElementById("filter-images"),
    images = document.querySelectorAll(".portfolio-item img"),
    loadMoreButton = document.getElementById("load-more"),
    allImagesOnPage = document.getElementsByTagName("img");

function init() {
    setListeners();
    initMail();
    // setSelectValue("6");
    filterImageResults();
    document.getElementById("default-language").click()
    document.getElementById("lang").selectedIndex = 0;
    const languagePicker = document.getElementById("lang");
    setLanguage(languagePicker);
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
        sendMail(subject = "");
    })
}

function filterImageResults() {


    selectElement.addEventListener("change", function () {
        var value = parseInt(this.value);
        for (var i = 0; i < images.length; i++) {
            if (i < value) {
                images[i].style.display = "inline-block";
            } else {
                images[i].style.display = "none";
            }
        }
    });
    loadMoreButton.addEventListener('click', (e) => {
        selectElement.value = '20';
        selectElement.click()
    });

}

function setSelectValue(value) {
    let children = selectElement.children;

    for (let i = 0; i < children.length; i++) {
        if (children[i].value == value) {
            console.log(value, children[i].value)
            children[i].click();
            children[i].selected = true;;
        }
    }
}


function onUserEnterSendMail() {
    let subject = `User has entered the website.`
    sendMail(subject);
}

function sendMail(subject = "") {
    fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ hasMail: false, mail: "", subject: subject, message: subject })
    })
}


init();