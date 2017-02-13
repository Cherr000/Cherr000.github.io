// game rule - done
// dice selection prompt - done
// dice input - done
// game play - done
// make player 2 own random box - done
// make game to work - done
// make loop for tie - done
// make prompt only work for selected number - done

"use strict"
function gameStarter() {
	gameRule();
	gamePlay();
}
function gameRule() {
	alert ("First one to get even number win the game, if tie reply.");
}
function selectionDice() {
	var diceOption = prompt ("Selection Dice Choice. 4,6,8,10,12 or 20");
	switch(diceOption) {
		case ("4"):
		document.getElementById("Dice").innerHTML = "Dice selected:"+ diceOption;
		console.log(diceOption);
		return diceOption;
		case ("6"):
		document.getElementById("Dice").innerHTML = "Dice selected:"+ diceOption;
		console.log(diceOption);
		return diceOption;
		case ("8"):
		document.getElementById("Dice").innerHTML = "Dice selected:"+ diceOption;
		console.log(diceOption);
		return diceOption;
		case ("10"):
		document.getElementById("Dice").innerHTML = "Dice selected:"+ diceOption;
		console.log(diceOption);
		return diceOption;
		case ("12"):
		document.getElementById("Dice").innerHTML = "Dice selected:"+ diceOption;
		console.log(diceOption);
		return diceOption;
		case ("20"):
		document.getElementById("Dice").innerHTML = "Dice selected:"+ diceOption;
		console.log(diceOption);
		return diceOption;
		default:
		alert ("Not a Option Repick");
		selectionDice();
		break;
	}
	return diceOption;
}
function diceSide() {
    var min = 1;
    var max = selectionDice();
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function cpuDice() {
    var min = 1;
    var max = 20;
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function gamePlay() {
	var playerOne = diceSide();
	var playerTwo = cpuDice();
	var player = 0;
	document.getElementById("diceRoll1").innerHTML = "Player 1 Roll: " + playerOne;
	document.getElementById("diceRoll2").innerHTML = "Player 2 Roll: " + playerTwo;
	if (playerOne %2 == 0 && playerTwo %2 != 0){
		alert ("playerOne Win");
		document.getElementById("playerOneWin").innerHTML = "playerOne Win. ";
	}
	else if (playerTwo %2 == 0 && playerOne %2 != 0){
		alert ("AI Win");
		document.getElementById("playerTwoWin").innerHTML = "AI Win. ";
	}
	else if ((playerOne%2===0)&& (playerTwo%2===0)||(playerOne%1===0)&& (playerTwo%1===0)) {
		alert("Tie! Play Again");
		document.getElementById("Tie").innerHTML = "Both Player Tie. ";
		gamePlay()
	}
	return player;
}
