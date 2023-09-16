// Step 1: Define Quiz Data

const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question:
      "What is the JavaScript function used to select an HTML element by its id?",
    options: [
      "document.query",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question:
      "In React.js, which hook is used to perform side effects in a function component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
];

//? Step 2: JavaScript Initialization

const answersElem = document.querySelectorAll(".answer");
console.log(answersElem);
const [questionElem, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, #option_1, #option_2, #option_3, #option_4"
  );
// console.log(option_2);
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];

  questionElem.innerText = `${currentQuiz + 1}: ${question}`;
  //  To get all the options
  options.forEach((curOption, index) => {
    // It is a dynamic way of accessing DOM elements.
    return (window[`option_${index + 1}`].innerText = curOption);
  });
};

loadQuiz();

//? Step 4: Get Selected Answer Function on Button click

const getSelected = () => {
  const answerElement = Array.from(answersElem);
  return answerElement.findIndex((curOption) => curOption.checked);
};

const deselectAnswers = () => {
  answersElem.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelected();
  console.log(selectedOptionIndex);

  //   let's check if the answer is correct or not
  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }

  //   lets increment the currentQuiz value to get the next array elem
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectAnswers();
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class="result">
    <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2>
    <p>Congratulations on completing the quiz! 🎉</p>
    <button class="reload-button" onclick="location.reload()">Play Again 🔄</button>
    </div>
  `;
  }
});
