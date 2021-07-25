const quizDb = [
  {
    question:
      "What are the different ways in which you can create a javascript object?",
    a: "var object = {};",
    b: "var object = new Object();",
    c: "var object = {prop1 : value1 , prop2 : value2};",
    d: "var object = Object.({create});",
    ans: "ans1",
  },
  {
    question: "How to create a constructor function?",
    a: "Constructor funtion cannot be created in javascript.",
    b: 'Any function when prefixed with "new" keyword at the time of invocation acts like a function.',
    c: "Name of the function should be constructor.",
    d: 'You to asign property named "Constructor" and assign it to a function.',
    ans: "ans2",
  },
  {
    question: "How can i create immutable property in Javascript ?",
    a: "Using JSON",
    b: "Using Object.defineProperty and specify only get and no set fucntion.",
    c: "Using closures.",
    d: "By making the property private.",
    ans: "ans3",
  },
  {
    question: "What is full form of API?",
    a: "Application Programmable Interface.",
    b: "Application Program Internet.",
    c: "Application Programming Interface.",
    d: "Applied Programming Interface.",
    ans: "ans3",
  },
  {
    question: "Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    ans: "ans2",
  },
];

const question = document.querySelector(".question");

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const scoreDiv = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  let questionList = quizDb[questionCount];
  question.innerText = questionList.question;

  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

const getCheckedAnswer = () => {
  let answer;
  answers.forEach((currentElement) => {
    if (currentElement.checked) {
      answer = currentElement.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((currentElement) => {
    currentElement.checked = false;
  });
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();

  if (checkedAnswer == quizDb[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();

  if (questionCount < quizDb.length) {
    loadQuestion();
  } else {
    scoreDiv.innerHTML = `<h3>
        You scored ${score}/${quizDb.length - 1}✌ </h3>
        <button class="btn" onclick="location.reload()">Try Again</button>`;

    scoreDiv.classList.remove("scoreArea");
  }
});

loadQuestion();
