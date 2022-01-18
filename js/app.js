const textContent = document.querySelectorAll('.text-content')
const imgProfile = document.querySelectorAll('.profile-img')

const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')

let textContentNumber = textContent.length
let imgProfileNumber = imgProfile.length
let slideNo = 0

btnPrev.addEventListener('click', prevFunc)
btnNext.addEventListener('click', nextFunc)

slideShow(slideNo)

function nextFunc() {
    slideNo++;
    slideShow(slideNo)
}

function prevFunc() {
    slideNo--;
    slideShow(slideNo)
}

function slideShow(slideNumber) {
    slideNumber = slideNo
    if (slideNumber >= textContentNumber && slideNumber >= imgProfileNumber) {
        slideNo = 0
    }

    if (slideNumber < 0) {
        slideNumber = slideNo - 1    
    }

    for (let i = 0; i < slideNumber; i++) {
        textContent[i].style.display = "none"
        imgProfile[i].style.display = "none"
    }

    // console.log(textContent[slideNo]);
    // console.log(imgProfile[slideNo]);
    textContent[slideNo].style.display = "block";
    imgProfile[slideNo].style.display = "block";
}

//prev tuşu çalışmıyor onu çöz if bloğunda çalış