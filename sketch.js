var canvas;
var gameState = 0
var contestantCount, database, quiz, question, contestant;
var allPlayers;

function setup(){
  canvas = createCanvas(850,500);
  database = firebase.database()
  quiz = new Quiz()
  quiz.getState()
  quiz.start()
}


function draw(){
  background("pink");
  if(contestantCount===3){
  quiz.update(1)
  }

  if(gameState === 1){
  quiz.play()
  }
  
}
