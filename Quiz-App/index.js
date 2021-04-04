const quizData = [
    {question: 'How old is Florin?',
     a: '10',
     b: '26',
     c: '30',
     d: '17', 
    correct: 'b'},
   {question: 'Which is the most used programming language?',
    a: 'swift',
    b: 'kotlin',
    c: 'Javascript',
    d: 'Python',
    correct: 'c'},
    {
        question: 'Who is the president of the US?',
        a: 'Donald Trump',
        b: 'Joe Biden',
        c: 'Florin Pop',
        d: 'Neil ARmstrong',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hot to Mark Loss',
        b: 'Cascading style sheets',
        c: 'Jason Object Notation',
        d: 'HyperText Markup Language',
        correct: 'd'
    },
    {question: 'What year was Javascript Launched?',
    a: '1992',
    b: '1994',
    c: '1995',
    d: '2008',
    correct: 'c'
}
];


const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0; 
let score = 0;
loadQuiz();


function loadQuiz(){
    deSelect();
    const currentQuizData = quizData[currentQuiz];


    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}
function getSelected (){
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
        answer = answerEl.id;

    }
});
return answer;
}
function deSelect (){
    answerEls.forEach((answerEl) => {
    answerEl.checked = false;

}
)};
 submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        
     if (currentQuiz < quizData.length){
        loadQuiz();
     }
     else {
         quiz.innerHTML = `<h2>You have answered ${score}/${quizData.length} 
         questions correctly</h2> <button onclick="location.reload()">Reload</button>`;
     }
    
    }

    


    
     
 });