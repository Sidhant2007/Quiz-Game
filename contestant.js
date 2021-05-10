class Contestant{
    constructor(){
    this.index = null
    this.name = null;
    this.answer = 0;
    }
    getCount(){
     var contestantCountRef= database.ref('contestantCount')
     contestantCountRef.on("value", function(data){
         contestantCount= data.val()
     })
    }  
    updateCount(count){
      database.ref('/').update({
          contestantCount: count
      })
    }
    update(){
      var playerIndex = "contestants/contestant"+ this.index
      database.ref(playerIndex).set({
          name : this.name,
          answer: this.answer
      })
    }
    static getPlayerInfo(){
      var playersRef = database.ref('contestants')
      playersRef.on("value", (data)=> {
        allPlayers= data.val()
      })
    }
  }