let colorBox = document.querySelector(".color-box")
let buttons = document.querySelector(".buttons")
let startGameBtn = document.querySelector(".start-button")
let hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let randomHex = ""



// send the randomly generated hex color to colorBox background color
// create 3 buttons, one of them will be the bg color of the colorBox and the
// 2 others will be another randomly generated hex color

const gameStart = () => {
    randomHex = randomColorGenerator()
    let fakeHex1 = randomColorGenerator()
    let fakeHex2 = randomColorGenerator()
    colorBox.style.backgroundColor = randomHex

    let buttonsWithHexColors = [randomHex, fakeHex1, fakeHex2]
    let buttonsArray = buttonsWithHexColors.map(item => "<button class='answer-button'>" + item + "</button>" )

    buttons.innerHTML = shuffleArray(buttonsArray).join("")
    startGameBtn.style.display = "none"

    let message = document.querySelector(".message")
    let answerButtons = document.querySelectorAll(".answer-button")
    let answerButtonsArr = Array.from(answerButtons)

    answerButtonsArr.map((btn) => {

        btn.addEventListener("click", () => {
            if(btn.textContent === randomHex) {
                message.innerHTML = `<p style='color: ${randomHex}'> Correct </p>`
            } else {
                message.innerHTML = `<p style='color: red'> --- Wrong --- </p>`
            }
        })

    })
}


// Shuffle array function
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}


// generate random hex color
const randomColorGenerator = () => {
    let hexColor = ""
    for(let i = 0; i < 6; i++) {
        let randomChar = Math.floor(Math.random() * hexCodes.length)
        hexColor += hexCodes[randomChar]
    }
    return `#${hexColor}`
}
