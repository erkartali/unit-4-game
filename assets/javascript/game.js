var targetNum = Math.floor(Math.random() * 101) + 19;
var targetNumHTML = $('.target')

var redNum = Math.floor(Math.random() * 12) + 1;
var blueNum = Math.floor(Math.random() * 12) + 1;
var yellowNum = Math.floor(Math.random() * 12) + 1;
var greenNum = Math.floor(Math.random() * 12) + 1;

var totalScore = 0;
var totalScoreHTML = $('.total');

var wins = 0;
var winsHTML = $('.wins');
var losses = 0;
var lossesHTML = $('.losses')


var randomize = () => {
    targetNum = Math.floor(Math.random() * 101) + 19;
    $(targetNumHTML).html(targetNum);
    redNum = Math.floor(Math.random() * 12) + 1;
    blueNum = Math.floor(Math.random() * 12) + 1;
    yellowNum = Math.floor(Math.random() * 12) + 1;
    greenNum = Math.floor(Math.random() * 12) + 1;
    totalScore = 0;
    $(totalScoreHTML).html(totalScore);
}

var reset = () => {
    randomize();
}

var alerts = () => {
    if (totalScore === targetNum) {
        alert("You win!");
        wins++
        winsHTML.text(wins);
        reset();
    } else if (totalScore > targetNum) {
        alert("You didn't math right!");
        losses++
        lossesHTML.html(losses);
        reset();
    }
}

var randomizeGems = () => {
    $('.red').attr('data-myValue', redNum);
    $('.blue').attr('data-myValue', blueNum);
    $('.yellow').attr('data-myValue', yellowNum);
    $('.green').attr('data-myValue', greenNum);
    console.log('red gem value:' ,$('.red').attr('data-myValue'));
    console.log('blue gem value:' ,$('.blue').attr('data-myValue'));
    console.log('yellow gem value:' ,$('.yellow').attr('data-myValue'));
    console.log('green gem value:' ,$('.green').attr('data-myValue'));
}

randomize();
randomizeGems();


var addNums = () => {
      
    $( ".crystal" ).click(function() {

        var clickNum = $(this).attr('data-myValue');
        var parsedClickNum = parseInt(clickNum);
        console.log(totalScore);
        totalScore += parsedClickNum;

        console.log('total score:', totalScore);
        $(totalScoreHTML).html(totalScore);
        alerts();
      });
      $(totalScoreHTML).html(totalScore);
    
}
addNums()

