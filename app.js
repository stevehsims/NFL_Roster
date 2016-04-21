$('form').submit(function (e) {
    e.preventDefault();
})
var roster = []
function Player(name, position, numbr) {
    this.playerName = name;
    this.playerPosition = position;
    this.playerNumber = numbr;


}

    function add() {

        var nameVal = $("#name").val()
        var positionVal = $("#position").val()
        var numbr = $("#number").val()
        var temp = new Player(nameVal, positionVal, numbr)
        roster.push(temp)
        console.log(nameVal)
        console.log(roster)
        draw()

    }
$('form').submit(add)

function draw() {
    $(".player-roster").empty()
    for (var i = 0; i < roster.length; i++) {
        var current = roster[i];
        $(".player-roster").append(
            '<div class="player-card">' +
            '<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="Packers Nation">' +
            '<br>' +
            '<span>Player Name :' + current.playerName + '</span>' +
            '<br>' +
            '<span>Player Position :' + current.playerPosition + '</span>' +
            '<br>' +
            '<span>Player Number :' + current.playerNumber + '</span>' +
            '</div>'
        )
    }
} 