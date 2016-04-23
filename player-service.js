function PlayerService (url, callWhenDone){
  
  if(typeof callWhenDone !== 'function'){
      return 'Error: you must provide a function to call when done'
  }
    
  var self = this;
  var playerData = []
  
  self.getAllPlayers = function(){
      return playerData;
  }
  
  self.getPlayersBySomeValue = function(value){
    var team = [];
    for (var i = 0; i < playerData.length; i++) {
        var currentPlayer = playerData[i];
        var hasValue = false;
        for(var prop in currentPlayer){
            if(typeof currentPlayer[prop] === 'string' && currentPlayer[prop].toLowerCase() === value){
                hasValue = true;
            }   
        }
        if(hasValue){
            team.push(currentPlayer)
        }
    }
    return team;      
  } 
  
  function goGetData(){
      var BCWServer = "http://bcw-getter.herokuapp.com/?url=";
      var modifiedUrl = BCWServer + encodeURIComponent(url);
      
      $.get(modifiedUrl, function(response){
          var data = JSON.parse(response)
          playerData = data.body.players.filter(function(player){
              if(player.pro_status === 'A'){
                  return player;
              }
          })
          callWhenDone(self)
      })
      
  }
  
  goGetData()
  
}









// function goGetData (){
//     console.log('Getting Data from', url)
//     console.log(1)
//     console.log(2)
//     console.log(3)
    
//     playerData = [{
//       name: 'Peyton Manning',
//       position: 'Quarterback',
//       jerseyNumber: 18,
//       team: 'Denver Broncos'
//     },{
//       name: 'Dez Bryant',
//       position: 'WR',
//       jerseyNumber: 88,
//       team: 'Dallas Cowboys'
//     },{
//       name: 'Aaron Rodgers',
//       position: 'Quarterback',
//       jerseyNumber: 12,
//       team: 'Greenbay Packers'
//     },{
//       name: 'Jordy Nelson',
//       position: 'WR',
//       jerseyNumber: 87,
//       team: 'Greenbay Packers'
//     }]
    
//     callWhenDone(self)
//   }