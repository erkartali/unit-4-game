var targetNum = Math.floor(Math.random() * 101) + 19;
var targetNumHTML = $('.target')

var redNum = Math.floor(Math.random() * 12) + 1;
console.log('rednum: ', redNum);
var blueNum = Math.floor(Math.random() * 12) + 1;
console.log('bluenum:', blueNum);
var yellowNum = Math.floor(Math.random() * 12) + 1;
console.log('yellownum:', yellowNum);
var greenNum = Math.floor(Math.random() * 12) + 1;
console.log('greennum:', greenNum);
console.log('targetnum:', targetNum);

var totalScore = 0;
var totalScoreHTML = $('.total');

var wins = 0;
var winsHTML = $('.wins');
var losses = 0;
var lossesHTML = $('.losses')


var randomize = () => {
    $(targetNumHTML).html(targetNum);
}

var reset = () => {
    totalScore = 0;
    randomize()
}

var alerts = () => {
    if (totalScore === targetNum) {
        setTimeout(() => { alert("You win player!") }, 500);
        wins++
        winsHTML.text(wins);
        reset();
    } else if (totalScore > targetNum) {
        alert("You didn't math right!")
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

    $( ".red" ).click(function() {

        var clickNum = $('.red').attr('data-myValue');
        var parsedClickNum = parseInt(clickNum);
        console.log(totalScore);
        totalScore += parsedClickNum;

        console.log('total score:', totalScore);
        $(totalScoreHTML).html(totalScore);
        // alerts();
      });
    $( ".blue" ).click(function() {

        var clickNum = $('.blue').attr('data-myValue');
        var parsedClickNum = parseInt(clickNum);
        console.log(totalScore);
        totalScore += parsedClickNum;

        console.log('total score:', totalScore);
        $(totalScoreHTML).html(totalScore);
        // alerts();
      });
    $( ".yellow" ).click(function() {

        var clickNum = $('.yellow').attr('data-myValue');
        var parsedClickNum = parseInt(clickNum);
        console.log(totalScore);
        totalScore += parsedClickNum;

        console.log('total score:', totalScore);
        $(totalScoreHTML).html(totalScore);
        // alerts();
      });
    $( ".green" ).click(function() {

        var clickNum = $('.green').attr('data-myValue');
        var parsedClickNum = parseInt(clickNum);
        console.log(totalScore);
        totalScore += parsedClickNum;

        console.log('total score:', totalScore);
        $(totalScoreHTML).html(totalScore);
        // alerts();
      });
      $(totalScoreHTML).html(totalScore);
      alerts();
      

}
addNums()

console.log(totalScore)
console.log(targetNum)

