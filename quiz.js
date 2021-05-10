class Quiz{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value", function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    async start(){
        if(gameState===0){
      contestant = new Contestant()
      var contestantCountRef = await database.ref('contestantCount').once("value")
      if(contestantCountRef.exists()){
      contestantCount = contestantCountRef.val()
      contestant.getCount()  
      }
      question = new Question()
      question.display(); 
        }
    }

    play(){
        question.hide()
        textSize(35)
        text("results", 350, 50)
        Contestant.getPlayerInfo()
        if(allPlayers !== undefined){
       var y = 100
       for(var plr in allPlayers){
           var correctAnswer = "2"
        if(correctAnswer === allPlayers[plr].answer ){
        fill("green")
        }     
        else{
            fill("red")
        }
        y= y + 20
        textSize(30)
        text(allPlayers[plr].name+ ":"+ allPlayers[plr].answer, 250, y)
       }
        }
    }



}