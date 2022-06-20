const pointForEach = 10
const maxQuiz = 10

let availableQuiz = []
let currentQuiz = {}
let quizCount
let score
let numOfCorrectAns
let wrongAnswerQuiz = []

const startBox = document.getElementById("startBox")
const instruction = document.getElementById("instruction")
const gameBox = document.getElementById("gameBox")
const endGameBox = document.getElementById("endGameBox")
const optionsContainer = document.getElementById("optionsContainer")
const nextButton = document.getElementById("nextButton")
const firework = document.getElementById("firework")
const wrongAnswerBox = document.getElementById("wrongAnswerBox")

let correctSound = new Audio('/sounds/correct-answer.mp3')
let wrongSound = new Audio('/sounds/wrong-answer.mp3')
let whooshSound = new Audio('/sounds/whoosh3.mp3')
let endSound = new Audio('/sounds/end game.mp3')
let clickSound = new Audio('/sounds/mouse-click.mp3')
let perfectScoreSound = new Audio('/sounds/success.mp3')

document.getElementById("instructionText").innerHTML = "Bạn sẽ phải trả lời " + maxQuiz + " câu đố ngẫu nhiên về những kiến thức liên quan đến Nhật Bản<br>" +
    "Mỗi câu chỉ có duy nhất 1 đáp án đúng, hãy click chuột vào đáp án mà bạn muốn chọn<br>" +
    "Đáp án đúng sẽ hiện màu xanh, đáp án sai sẽ hiện màu đỏ<br>" +
    "Mỗi câu có giá trị là " + pointForEach + " điểm, tổng số điểm là " + pointForEach * maxQuiz + "<br>" +
    "Hãy thử xem bạn hiểu bao nhiêu về Nhật Bản nhé!"


function showInstruction() {
    instruction.classList.remove("hide")
    clickSound.play()
}

function hideInstruction() {
    instruction.classList.add("hide")
    clickSound.play()
}

function startGame() {
    startBox.classList.add("hide")
    gameBox.classList.remove("hide")
    quizCount = 0
    score = 0
    numOfCorrectAns = 0
    availableQuiz = [...quizList]
    setTimeout(function() { getNewQuiz() }, 150)
    clickSound.play()
    progressMark()
}

function progressMark() {
    for (let i = 0; i < maxQuiz; i++) {
        const mark = document.createElement("div")
        mark.className = "mark"
        document.getElementById("progressMark").appendChild(mark)
    }
}

function getNewQuiz() {
    quizCount++
    progress()
    randomQuiz()
    nextButton.style.visibility = "hidden"
    setTimeout(function() { whooshSound.play() }, 50)

    if (quizCount === maxQuiz)
        nextButton.innerText = 'Kết thúc quiz'
}

function progress() {
    document.getElementById("progressText").innerHTML = "Câu thứ " +
        "<span style='color: rgb(37, 155, 187); font-weight: 800; font-size: 1.2rem; text-shadow: 0.1rem 0.1rem 0.5rem rgb(184, 219, 229)'>" +
        quizCount + "</span>" +
        "  trên " +
        "<span style='color: rgb(37, 155, 187); font-weight: 600;text-shadow: 0.1rem 0.1rem 0.5rem rgb(184, 219, 229)'>" +
        maxQuiz + "</span>" + " câu"
    document.getElementById("progressMark").children[quizCount - 1].classList.add("answering")
}

function randomQuiz() {
    let quizIndex = Math.floor(Math.random() * availableQuiz.length)
    currentQuiz = availableQuiz[quizIndex]
    document.getElementById("question").innerHTML = currentQuiz.question
    availableQuiz.splice(quizIndex, 1)
    optionsContainer.innerHTML = ''

    let availableOptions = []
    for (let i = 0; i < currentQuiz.options.length; i++) {
        availableOptions.push(i)
    }

    for (let i = 0; i < currentQuiz.options.length; i++) {
        let optionIndex = Math.floor(Math.random() * availableOptions.length)
        const option = document.createElement("div")
        option.innerHTML = currentQuiz.options[availableOptions[optionIndex]]
        option.className = "option"
        option.id = availableOptions[optionIndex]
        option.setAttribute("onclick", "getResult(this)")
        optionsContainer.appendChild(option)
        availableOptions.splice(optionIndex, 1)
    }
}


function getResult(clickedOption) {
    notAcceptingAnswer()
    if (clickedOption.innerHTML === currentQuiz.options[currentQuiz.answer]) {
        clickedOption.classList.add("correct", "clickedOption")
        addScore()
        setTimeout(function() { correctSound.play() }, 900)
        setTimeout(function() { document.getElementById("progressMark").children[quizCount - 1].classList.add("correctMark") }, 1000)
    } else {
        clickedOption.classList.add("wrong", "clickedOption")
        document.getElementById(currentQuiz.answer).classList.add("correct")
        addwrongQuiz(clickedOption)
        setTimeout(function() { wrongSound.play() }, 900)
        setTimeout(function() { document.getElementById("progressMark").children[quizCount - 1].classList.add("wrongMark") }, 1000)
    }
}

function addwrongQuiz(wrong) {
    let wrongQuiz = document.createElement("div")
    wrongQuiz.innerHTML = "Câu " + quizCount + ": " + currentQuiz.question
    wrongQuiz.className = "wrongQuestion"
    document.getElementById("wrongAnswerQuiz").appendChild(wrongQuiz)

    let wrongQuizAnswer = document.createElement("div")
    wrongQuizAnswer.innerHTML = "Câu trả lời của bạn: " +
        "<span style='color:red; font-weight:500'>" + wrong.innerHTML + "</span>" + "<br>" +
        "Câu trả lời đúng: " +
        "<span style='color:green; font-weight:600'>" + currentQuiz.options[currentQuiz.answer] + "</span>"
    wrongQuizAnswer.className = "wrongAnswer"
    document.getElementById("wrongAnswerQuiz").appendChild(wrongQuizAnswer)

    let referenceLink = document.createElement("div")
    referenceLink.innerHTML = "<a href='" + currentQuiz.reference + "' target='_blank' class='reference'>➤ Tìm hiểu thêm</a>"
    referenceLink.className = "referenceContainer"
    document.getElementById("wrongAnswerQuiz").appendChild(referenceLink)
}

function notAcceptingAnswer() {
    for (let i = 0; i < optionsContainer.children.length; i++) {
        optionsContainer.children[i].classList.add("notAcceptingAnswer")
    }
    setTimeout(function() { nextButton.style.visibility = "visible" }, 1700)
}

function addScore() {
    numOfCorrectAns++
    score += pointForEach
    setTimeout(function() { document.getElementById("score").innerHTML = score }, 1200)
}

function next() {
    if (quizCount < maxQuiz)
        getNewQuiz()
    else {
        clickSound.play()
        setTimeout(function() { endGame() }, 500)
    }
}

function endGame() {
    gameBox.classList.add("hide")
    endGameBox.classList.remove("hide")
    if (score == maxQuiz * pointForEach) {
        setTimeout(function() { perfectScoreSound.play() }, 300)
        setTimeout(function() { firework.classList.remove("hide") }, 300)
        if (document.getElementById("reviewButton").style.display != "hide")
            document.getElementById("reviewButton").classList.add("hide")
    } else {
        setTimeout(function() { endSound.play() }, 300)
        document.getElementById("reviewButton").classList.remove("hide")
    }
    showLastScore()
}

function showLastScore() {
    document.getElementById("lastScore").innerHTML = "Số điểm của bạn: " +
        "<span style='color: rgb(37, 155, 187); font-weight: 600; font-size: 1.5rem; text-shadow: 0.1rem 0.1rem 0.5rem rgb(184, 219, 229)'>" +
        score + "</span>"
    document.getElementById("lastCorrectAnswer").innerHTML = "Số câu trả lời đúng: " +
        "<span style='color: rgb(37, 155, 187); font-weight: 600; font-size: 1.5rem; text-shadow: 0.1rem 0.1rem 0.5rem rgb(184, 219, 229)'>" +
        numOfCorrectAns + "/" + maxQuiz + "</span>"
}

function showWrongAnswerBox() {
    endGameBox.classList.add("hide")
    wrongAnswerBox.classList.remove("hide")
    clickSound.play()
}

function hideWrongAnswerBox() {
    wrongAnswerBox.classList.add("hide")
    endGameBox.classList.remove("hide")
    clickSound.play()
}

function restart() {
    endGameBox.classList.add("hide")
    startBox.classList.remove("hide")
    nextButton.innerText = 'Câu tiếp theo'
    document.getElementById("score").innerHTML = "0"
    document.getElementById("wrongAnswerQuiz").innerHTML = ''
    document.getElementById("progressMark").innerHTML = ''
    setTimeout(function() { clickSound.play() }, 50)
    if (instruction.style.display != "none")
        hideInstruction()
    if (firework.style.display != "none")
        firework.classList.add("hide")

}