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

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const result = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const playAgain = document.querySelector(".again");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let totalCount = 0;
let selectedAnswer;

const showquestion = (qNumber) => {
    question.textContent = data[qIndex].question;
    answerContainer.innerHTML = data[qIndex].answers.map((item, index) =>
        `<div class="answer">
              <input type="radio" id="${index}" name="answer" value="${item.isCorrect}" />
              <label for="1">${item.answer}</label>
            </div>`
    ).join("");
    selectAnswer();
};

const selectAnswer = () => {
    answerContainer.querySelectorAll("input").forEach(el => {
        el.addEventListener('click', (e) => {
            selectedAnswer = e.target.value;
        });
    });
}

const showResult = () => {
    result.style.display="block";
    gameScreen.style.display = "none";
}
const showFirst = () => {
     qIndex = 0;
     correctCount = 0;
     wrongCount = 0;
     totalCount = 0;

    showquestion(qIndex);
    
}

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        qIndex++;
        
        if (qIndex === data.length) {
            return showResult();
        }
          showquestion(qIndex);  
    })
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
