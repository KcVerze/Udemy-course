let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

let userClickedPattern = [];

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
});


function nextSequence(){
    randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    // button animation

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // to play audio for the random button
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();


}



