//generates random number 19-120 that player must reach
var randomNum = Math.floor(Math.random() * (120 - 19) + 19); 

//list of variables used
var wins = 0;
var losses = 0;
var currentScore = 0;

//generates random number 1-12 for each of the crystal images
var img1 = Math.floor(Math.random() * 12) + 1;
var img2 = Math.floor(Math.random() * 12) + 1;
var img3 = Math.floor(Math.random() * 12) + 1;
var img4 = Math.floor(Math.random() * 12) + 1;


//function that resets random 1-12 number for crystal images
function randomCrystalNum() {
    img1 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
    img2 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
    img3 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
    img4 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
} 

//function used to generate new random number after win or loss and then display new number
function randomNumGen() {
    randomNum = Math.floor(Math.random() * (120 - 19) + 19);
    $("#randomNum").text(randomNum);
}

//functions used to call audio files
    //function win_song() {
		//document.getElementById('audiotag2').play();
    //}
    
    //function lose_song() {
		//document.getElementById('audiotag4').play();
   // }
    
    //function play() {
       // var audio = document.getElementById('audio');
        //if (audio.paused) {
           // audio.play();
            //$('#play').removeClass('glyphicon-play-circle')
            //$('#play').addClass('glyphicon-pause')
        //}else{
           // audio.pause();
            //audio.currentTime = 0
           // $('#play').addClass('glyphicon-play-circle')
           // $('#play').removeClass('glyphicon-pause')
       // }
   // }

//keeps track of player wins
function gamePlay(){

	if (currentScore === randomNum){
		wins++;
        $("#wins").text(wins);//displays win in html
        //next 2 lines reset the current score and displays that in html
		currentScore = 0;
        $("#player-currentNum").text(currentScore); 
        win_song(); //calls win audio 
        alert("You win, you are a regular crystal baller!");
        randomCrystalNum();  //call function to reset random number for crystal images
        randomNumGen(); //call funtion to reset random number after win
    }  
    
    else if (currentScore > randomNum){   //keeping track of player losses
		losses++;
        $("#losses").html(losses); //displays loss in html
        //next 2 lines reset the current score and displays that in html
		currentScore = 0;
        $("#player-currentNum").text(currentScore);
        lose_song(); //calls lose audio
        alert("You lose, and now you must continue onwards for humankind's fate rest in your hands...");
        randomCrystalNum(); // call function to reset random number for crystal images
        randomNumGen(); //call function to reset random number after loss
	}
}


//displays random number for user to reach
$("#randomNum").text(randomNum); {


//when click on an crystal image will add number to current score and then calls gameplay function
$("#img1").on("click", function(){
    currentScore += img1;
    $("#player-currentNum").text(currentScore);
    gamePlay();
});


$("#img2").on("click", function(){
	currentScore += img2;
    $("#player-currentNum").text(currentScore);
	gamePlay();
});


$("#img3").on("click", function(){
	currentScore += img3;
    $("#player-currentNum").text(currentScore);
	gamePlay();
});


$("#img4").on("click", function(){
	currentScore += img4;
    $("#player-currentNum").text(currentScore);
	gamePlay();
});
}



