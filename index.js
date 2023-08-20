var questionBank= [
    {
        question : 'What is the capital of France?',
        option : ['London','Madrid','Paris','Rome'],
        answer : 'Paris'
    },
    {
        question : ' What is the largest planet in our solar system?',
        option : ['Venus','Mars','Jupiter','Saturn'],
        answer : 'Jupiter'
    },
    {
        question : 'Which famous scientist developed the theory of relativity?',
        option : ['Isaac Newton','Galileo Galilei','Albert Einstein','Marie Curie'],
        answer : 'Albert Einstein'
    },
    {
        question : 'Which country is known as the "Land of the Rising Sun"?',
        option : ['China','Japan','India','South Korea'],
        answer : 'Japan'
    },
    {
        question : 'What is the chemical symbol for the element gold?',
        option : ['Go','Gd','Au','Ag'],
        answer : 'Au'
    },
    {
        question : ' Which planet is known as the "Red Planet"?',
        option : ['Venus','Mars','Jupiter','Mercury'],
        answer : 'Mars'
    },
    {
        question : ' What is the largest ocean on Earth?',
        option : [' Atlantic Ocean',' Indian Ocean','Pacific Ocean','Arctic Ocean'],
        answer : 'Pacific Ocean'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');

var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+''
    +questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' ' +questionBank.length;
}

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none'
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//back to quiz button event
function backToQuiz(){
    location.reload();
}

//function to check answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();