new PlayerService('http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json', ready)

function ready(dataStore){
  
  var roster = $('.roster');
  
  var players = dataStore.getAllPlayers();
  
  $('button').on('click', function(event){
      var query = $('#query').val()
      players = dataStore.getPlayersBySomeValue(query)
      update();
  })
  
  $('.clear-filter-button').on('click', function(){
      players = dataStore.getAllPlayers()
      update();
  })
  
  
  function update(){
    roster.empty()
    roster.append('<h3>Showing '+players.length+' Active Players</h3>')
    
    players.forEach(function(player)
    {
        
        var template = '<div class="player-card"><img src="'+player.photo+'" width="80"/>'+player.fullname+'</div>'
        var template2 = '<div class="player-card">' +
            '<img src="'+player.photo+'" alt="Packers Nation">' +
            '<br>' +
            '<button class="btn btn-danger">Remove</button>' +
            '<br>' +
            '<br>' +
            '<span>Player Name :' + player.fullname + '</span>' +
            '<br>' +
            '<span>Player Position :' + player.position + '</span>' +
            '<br>' +
            '<span>Player Number :' + player.jersey + '</span>' +
            '<br>' +
            '<span>Player Team :' + player.pro_team  + '</span>' +
            '</div>'
              
              roster.append(template2);
    })
      
  }

update();  
  
}