const
    rightMergedElements = document.querySelectorAll(".right-margin"),
    leftMergedElements = document.querySelectorAll(".left-margin");

function init() {
    setListeners();
}

function setListeners() {
    rightMergedElements.forEach(element => {
        element.addEventListener('click', (e) => {
            e = e.target;
            console.log(e)
            e.style.transform = `scale(1.8, 1.8)`;
            e.style.border = `solid rgba(255, 217, 0, 0.409) 1vh`

            setTimeout(() => {
                e.style.transform = `scale(1, 1)`;
                e.style.border = `none`;


            }, 800)
        })
    })
    leftMergedElements.forEach(element => {
        element.addEventListener('click', (e) => {
            e = e.target;
            console.log(e)
            e.style.transform = `scale(2, 2)`;
            e.style.border = `solid rgba(255, 217, 0, 0.409) 1vh`

            setTimeout(() => {
                e.style.transform = `scale(1, 1)`;
                e.style.border = `none`;
            }, 2000)
        })
    })
}
init();