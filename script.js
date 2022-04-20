//constant variables 

onst restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text")

// Questions 

let currentQuestion = 0;
let score = 0;
 
let questions = [
   {
       question: "Who helped Rihanna with her career?",
       answers: {
           a: " P. Diddy",
           b: "Oprah", 
           c: "Kendrick Lamar",
           d:  "Jay-Z"
       },
       correctAnswer: "d"
   },
   {
       question: "What album had Beyonce's 'Hold Up' song on there?",
       answers: {
        a: "4",
        b:"Dangerously In Love",
        c: "Beyonce",
        d: "Lemonade"
       },
       correctAnswer: "d"
   },
   {
       question: "Who sang the song Fireworks? ",
       answers: {
           a: " Lady Gaga",
           b: "Pink",
           c: "Katy Perry", 
           d: "Taylor Swift"
       }, 
       correctAnswer: "c"
   },
   question: "What album made Lady Gaga famous?",
       answers: {
           a: " ArtPop",
           b: "Joann",
           c: "Fame Monster", 
           d: "Born This Way"
       },
       correctAnswer: "c"
   },
   question: "What age did Adele get a divorce? ",
       answers: {
           a:"21",
           b: "25";
           c: "30";
           d: "31"
       },
       correctAnswer: "c"
   }
]

// Mutable Variables 

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);

//function to begin Quiz 

function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    prevBtn.classList.add("hide");
 }
  
 beginQuiz();