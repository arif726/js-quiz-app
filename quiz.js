// Dummy data for quiz project
const data = [
    {
        id: 1,
        question: "Which this fish is actually a fish?",
        answers: [
            {answer:"Sowrd fish", isCorrect:true},
            {answer:"Jelly fish", isCorrect:false},
            {answer:"Star fish", isCorrect:false},
            {answer:"Cary fish", isCorrect:false},
        ],
    },
    {
        id: 2,
        question: "Which this bird :",
        answers: [
            {answer:"Huming", isCorrect:true},
            {answer:"Ox", isCorrect:false},
            {answer:"Tiger", isCorrect:false},
            {answer:"Goat", isCorrect:false},
        ],
    },
    {
        id: 3,
        question: "A flutter is group of:",
        answers: [
            {answer:"Bees", isCorrect:false},
            {answer:"Penguins", isCorrect:false},
            {answer:"Butterflies", isCorrect:true},
            {answer:"Camels", isCorrect:false},
        ],
    },   
]

//Getting all Elements

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const result = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const playAgain = document.querySelector(".again");

//initializing variables
let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let totalCount = 0;
let selectedAnswer;

const showquestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qIndex].question;
    //get item from object in an array use map
    answerContainer.innerHTML = data[qIndex].answers.map((item, index) =>
        `<div class="answer">
              <input type="radio" id="${index}" name="answer" value="${item.isCorrect}" />
              <label for="1">${item.answer}</label>
            </div>`
        //join is use for removing extra comma
    ).join("");
    selectAnswer();
};

const selectAnswer = () => {
    //forEach loop use callback function
    answerContainer.querySelectorAll("input").forEach(el => {
        el.addEventListener('click', (e) => {
            selectedAnswer = e.target.value;
        });
    });
}
//This is the tricky part. Without initialization next game is not working
const showFirst = () => {
     qIndex = 0;
     correctCount = 0;
     wrongCount = 0;
     totalCount = 0;

    showquestion(qIndex);
    
}

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        //if statement shortcut
        (selectedAnswer === "true") ? correctCount++ : wrongCount++;
            qIndex++;
            showquestion(qIndex)       
    })
}
const showResult = () => {
    result.style.display="block";
    gameScreen.style.display = "none";
    document.querySelector(".correct").textContent = `Correct Answer : ${correctCount}`
    document.querySelector(".wrong").textContent = `Wrong Answer : ${wrongCount}`
    document.querySelector(".score").textContent = `Score : ${correctCount*10}`
}

const plyAgain = () => {
    playAgain.addEventListener("click", () => {
        result.style.display="none";
        gameScreen.style.display = "block";
        showFirst();
    })
}


showquestion(qIndex);
submitAnswer();
plyAgain();
