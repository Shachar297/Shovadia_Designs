const
    header = document.getElementById("header"),
    navLinks = document.getElementById("nav-links"),
    headerImages = [
        "src/Shovadia.png",
        "src/Fiverr_logo13.png",
        "src/Suta.jpg",
        "src/Fiverr_logo15.png",
        "src/Fiverr_logo10.png",
        "src/Shovadia.png",
        "src/Fiverr_logo6.png",
        "src/Fiverr_image01.png",
        "src/EasyLife.png",
        "src/Fiverr_logos21.png",
        "src/Get Fixed.png",
    ];
let index = -1;
setInterval(() => { rotateImages() }, 5500);

function initHeaderImages() {
}

function rotateImages() {


    // index = index < headerImages.length - 1 ? 0 : index
    if (index >= headerImages.length - 1) {
        index = 0;
    } else {
        index++;
    }
    header.classList.remove('fade-in');
    header.classList.add('fade-out');

    setTimeout(function () {
        header.style.backgroundImage = 'url(' + headerImages[index] + ')';

        setHeaderStyles(headerImages[index], index);
        header.classList.remove('fade-out');
        header.classList.add('fade-in');
    }, 250);
    return index;
}

function setHeaderStyles(image, index) {
    if (index == 6 || index == 2) {
        resetDefaults();
    } else if (index == 2) {
        header.style.backgroundSize = "60% 85%"
        header.style.backgroundColor = "#db534f"
    } else if (index == 7) {
        resetDefaults();
    } else if (image == "src/Shovadia.png") {
        header.style.backgroundSize = "60% 85%"
        // header.style.backgroundColor = "#db534f"
    } else {
        resetDefaults();
    }
    if (index == 5) {
        navLinks.classList.add("blacked");
    } else {
        navLinks.classList.remove("blacked");
    }
}

function resetDefaults() {
    header.style.backgroundSize = "90% 100%"
    header.style.backgroundColor = "black";
    // navLinks.style.marginLeft = "2vw"
}
initHeaderImages();
