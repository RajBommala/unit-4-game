//Global Variables

let numberToMatch;
let losses = 0;
let wins = 0;
let previous = 0;


let resetAndStart = function (){
	$(".crystals").empty();

	let images = [
			'/Users/basavaraja/Documents/unit-4-game/assets/images/crystal1.png', 
			'/Users/basavaraja/Documents/unit-4-game/assets/images/crystal2.png', 
			'/Users/basavaraja/Documents/unit-4-game/assets/images/crystal3.png', 
			'/Users/basavaraja/Documents/unit-4-game/assets/images/crystal4.png'];
		
numberToMatch = Math.floor(Math.random()* 101) + 19;
$(".numberToMatch").html("Number to match: " + numberToMatch);
for (let i=0; i<4; i++){
	let random = Math.floor(Math.random() * 11) + 1;
	console.log(random);
	let crystal = $("<div>");
	crystal.attr({
		"class": 'crystal',
		"data-random": random
	});
	crystal.css({
		"background-image":"url('" + images[i] + "')",
		"background-size":"cover"

	});
	
	$(".crystals").append(crystal);
}
$("#previous").html("Total Score: " + previous);

}
resetAndStart();

$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Total score: " + previous);

	if(previous > numberToMatch){
		$('#status').text('You lost!!!!');
		losses++;
		$('#losses').text('losses: ' + losses);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === numberToMatch){
		$('#status').text('You won!!!!');
		wins++;
		$('#wins').text('wins:' + wins);

		previous = 0;

		resetAndStart();

	}

});

//SpeudoCoding: Game of 4 crystals

// Computer should generate a random number berween 19-120 each time the game is started.
//Every crystal should have randomly created hidden number between 1-12
// When any of the 4 crystals clicked by user, it should add the previous result untill it is equal to total score.
// if total score matches the random number, decrement losses counter.
//if total score go beyond random number, increment wins counter.