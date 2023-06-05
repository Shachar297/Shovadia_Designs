const
    header = document.getElementById("header"),
    navLinks = document.getElementById("nav-links"),
    headerImages = [
        "src/Fiverr_logo13.png",
        "src/Fiverr_logo15.png",
        "src/Fiverr_logo10.png",
        "src/Fiverr_logo6.png",
        "src/Fiverr_image01.png",
        "src/EasyLife.png",
    ];
let index = -1;
setInterval(() => { rotateImages() }, 6000);

function initHeaderImages() {
}

function rotateImages() {


    // index = index < headerImages.length - 1 ? 0 : index
    if (index >= headerImages.length - 1) {
        index = 0;
    } else {
        index++;
    }
    // if(index > headerImages.length)
    header.classList.remove('fade-in');
    header.classList.add('fade-out');

    setTimeout(function () {
        header.style.backgroundImage = 'url(' + headerImages[index] + ')';

        setHeaderStyles(index);
        header.classList.remove('fade-out');
        header.classList.add('fade-in');
    }, 250);
    return index;
}

function setHeaderStyles(index) {
    if (index == 5 || index == 2) {
        header.style.backgroundSize = "65%"
    }else {
        header.style.backgroundSize = "75%"
    }
    if (index == 4) {
        console.log("---")
        navLinks.classList.add("blacked");
    } else {
        navLinks.classList.remove("blacked");
    }
}

initHeaderImages();
