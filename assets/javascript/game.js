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

var totalScore = "";
var totalScoreHTML = $('total');


var randomize = () => {
    $(targetNumHTML).html(targetNum);
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
        // totalScore = $('.red').attr('data-myValue');

        var clickNum = $('.red').attr('data-myValue');
        var parsedClickNum = parseInt(clickNum);

        console.log(parsedClickNum);
        var totalOfBoth = totalScore + parsedClickNum;

        console.log('total score:', totalOfBoth);
      });
}
addNums()