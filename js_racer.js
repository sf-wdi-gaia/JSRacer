"use strict";

var inProgress = true;

window.onload = function() {
  addKeyUp();
}

var addKeyUp = function(){
  document.addEventListener('keyup', function(event){
    whichPlayer(event)
  })
}

var whichPlayer = function(event){
  if (event.keyCode === 113 || event.keyCode === 81) {
    movePlayerOne();
  }
  else if (event.keyCode === 112 || event.keyCode === 80) {
    movePlayerTwo();
  }
}

var movePlayerOne = function(){
  var player = document.getElementById("player-1");
  checkWinner(player);
  player.nextElementSibling.id = "player-1";
  player.id = "";
}

var movePlayerTwo = function(){
  var player = document.getElementById("player-2");
  checkWinner(player);
  player.nextElementSibling.id = "player-2";
  player.id = "";
}

var checkWinner = function(player){
  if (player.nextElementSibling == null && inProgress == true ){
    inProgress = false
    alert( player.id.charAt(0).toUpperCase() + player.id.slice(1) + ' Wins!')
  }
}