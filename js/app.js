const startbtn = document.getElementById('stbtn');
const nextbtn = document.getElementById('ntbtn');
startbtn.addEventListener('click',startGame);
nextbtn.addEventListener('click',setNextQuestion);
const questioncontainer = document.querySelector('.questioncontainer');
const questionelem = document.getElementById( "questionelem");
const answerelem = document.getElementById( "answerelem");
const answerbtn = document.querySelector('.answerbtn');
let shuffledQuestions ,currentQuestionindex;

function startGame(){
startbtn.classList.add('hide');
shuffledQuestions = Question.sort(()=>Math.random()-0.5);
currentQuestionindex = 0;
questioncontainer.classList.remove('hide');
setNextQuestion();

}

function setNextQuestion(){
    resetState();
showQuestion(shuffledQuestions[currentQuestionindex]);
currentQuestionindex++;
}
function showQuestion(Question){
questionelem.innerText = Question.question;
Question.answer.forEach(answer => {
    const button = document.createElement('button')  
    button.innerText = answer.text ;
    button.classList.add('btn');
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click',selectAnswer);
    answerelem.appendChild(button);
});
}
function resetState(){
    clearStatus(document.body);
nextbtn.classList.add('hide');
while(answerelem.firstChild){
    answerelem.removeChild(answerelem.firstChild);
}
}
function selectAnswer(e){
    const selectedbtn = e.target;
    const correct = selectedbtn.dataset.correct;
    setStatus(document.body,correct);
    Array.from(answerelem.children).forEach(btn =>{
      setStatus(btn,btn.dataset.correct);
    })
    if(shuffledQuestions.length>=currentQuestionindex+1)
    nextbtn.classList.remove('hide');else{
        startbtn.innerText = 'Restart';
        startbtn.classList.remove('hide');
    }

}
function setStatus(element,correct){
    clearStatus(element);
    if(correct){
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }
}
function clearStatus(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');

}
const Question =[
    {
        question:"what is 2 + 2?",
        answer:[{text:"4",correct:true},
        {text:"6",correct:false}]
    },

    {
        question:"What is the full form of Api",
        answer:[{text:"Additional playing interface",correct:false},{text:"Application programming interface",correct:true},
        {text:"Any programming interface",correct:false},{text:"actual programming interface",correct:false}]
    },

    {
        question:"What is 25 * 25?",
        answer:[{text:"675",correct:false},
        {text:"615",correct:false},{text:"525",correct:false},{text:"625",correct:true}]
    },

    {
        question:"What is the best way to learn Web Development?",
        answer:[{text:"Watching Tutorials",correct:false},
        {text:"Procastination",correct:false},{text:"Regular Practising",correct:true},{text:"focusing on big projects",correct:false}]
    },

    {
        question:"Which is the best Programming Language?",
        answer:[{text:"C++",correct:true},
        {text:"C#",correct:true},{text:"JavaScript",correct:true},{text:"Python",correct:true}]
    }
]