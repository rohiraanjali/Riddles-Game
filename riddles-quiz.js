

var chalk = require('chalk'); 
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question('Whats your name? ');
console.log(chalk.green("\nwelcome! " + userName + " Let's Play a game of riddles.\n"));
console.log(chalk.red("Level one has 5 questions . Win it! Level2 awaits you.\n"));

// variables
var highScores = [{
  name: "Anjali",
  score: 10
  },{
  name: "Adarsh",
  score: 9
  }
  ];


var levelOneQuestions = [{
  question:"What has a face and two hands but no arms or legs? ",
  answer:"clock"
},{
  question:"What has to be broken before you can use it? ",
  answer:"egg"
},{
  question:"What has a neck but no head? ",
  answer:"bottle"
},{
  question:"What goes up and doesn’t come back down? ",
  answer:"age"
},{
  question:"What belongs to you but is used more by others? ",
  answer: "name"
},
];
var levelTwoQuestions = [{
  question: " Every person has one, and no one can lose it. Can you guess what it is? ",
  answer: "shadow"
},{
  question: "When you do know me about me, them I am definitely something. You will always search for me. But when you know me, I am nothing. Who am I? ",
  answer: "riddles"
},{
  question: "Find me who am I. I am the building with number stories? ",
  answer:"library"
},{
  question: "What is the word that is spelled incorrectly in all dictionaries?",
  answer:"incorrectly"
},{
  question: "I have all the knowledge you have. But I am small as your fist that your hands can hold me. Who am I? ",
  answer:"brain"
},
];
// functions
function play(question , answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("\nright! ");
    score = score + 1;
  }
  else{
    console.log("\nwrong!"); 
  }
  console.log(chalk.green("\ncurrent score: ", score)),
  console.log("\n------------------------\n");
}

function levelOne() {
  for (i=0; i< levelOneQuestions.length;i++){
   var currentQuestion = levelOneQuestions[i];
   play(currentQuestion.question,currentQuestion.answer);
  }
}

function levelTwo() {
  for (i=0; i< levelTwoQuestions.length;i++){
   var currentQuestion = levelTwoQuestions[i];
   play(currentQuestion.question,currentQuestion.answer);
  }
}

  
function scoreBoard(){
  console.log("HIGH SCORES");
  for (i=0;i<highScores.length;i++){
    console.log(chalk.red(highScores[i].name+" "+highScores[i].score));
  }
}

function startingGame (){
  var agree = readlineSync.question("So Are you ready ? press \'n' for exit ..any other key to continue..");
  if (agree.toLowerCase()=="n"){
    console.log(chalk.yellow("\nwe are sad to see you go\n"));
  }
  else
   {
    console.log(chalk.blue("\nAwesome..here comes the questions for level 1. Win it! Level 2 awaits you !!! \n"));
    levelOne();

    console.log(chalk.yellow("Your final score for level 1 is", score));
    if (score == "5"){
      console.log(chalk.blue("\nHURRAY!!! Welcome to level 2\n"));
      levelTwo();

      console.log(chalk.yellow("Your final score for level2 is", score));
      }
    
    scoreBoard();
  }
}
startingGame();





