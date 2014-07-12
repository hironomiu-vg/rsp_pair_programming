var kati=0;
var make=0;
var hikiwake=0;

$(function(){
  "use strict";
  var HAND_TYPE = {
    ROCK : 0,
    SCISSORS : 1,
    PAPER : 2,
  };
  var RSP_RESULT_CODE = {
    DRAW : 0,
    WIN : 1,
    LOSE : 2,
  };

  $(".rsp-btn").click(function(){
    var result = judge(
      myHand($(this).attr("id")),
      bobHand()
      );
    showResult(result);
  });
  function myHand(handType) {
    var hand;
    if (handType == "rock") {
      $("#myrspimg").attr("src", "img/rock.png");
      hand = HAND_TYPE.ROCK;
    } else if (handType == "scissors") {
      $("#myrspimg").attr("src", "img/scissors.png");
      hand = HAND_TYPE.SCISSORS;
    } else {
      $("#myrspimg").attr("src", "img/paper.png");
      hand = HAND_TYPE.PAPER;
    }
    return hand;
  }
  function bobHand() {
    var hand = Math.floor(Math.random() * 3);
    if (hand === HAND_TYPE.ROCK) {
      $("#bobrspimg").attr("src", "img/rock.png");
    } else if (hand === HAND_TYPE.SCISSORS) {
      $("#bobrspimg").attr("src", "img/scissors.png");
    } else {
      $("#bobrspimg").attr("src", "img/paper.png");
    }
    return hand;
  }
  function judge(myHand, otherHand) {
    var result;
    if (myHand === otherHand) {
      result = RSP_RESULT_CODE.DRAW;
    } else if ((myHand === HAND_TYPE.ROCK && otherHand === HAND_TYPE.SCISSORS) || (myHand === HAND_TYPE.SCISSORS && otherHand === HAND_TYPE.PAPER) || (myHand === HAND_TYPE.PAPER && otherHand === HAND_TYPE.ROCK)) {
      result = RSP_RESULT_CODE.WIN;
    }else {
      result = RSP_RESULT_CODE.LOSE;
    }
    return result;
  }
  function showResult(result) {
    if (result === RSP_RESULT_CODE.DRAW) {
      $("#result").text("draw.");
      var info=document.getElementById("senreki");
      var textNode=document.createTextNode("引き分け\n");
      info.appendChild(textNode);
      hikiwake= hikiwake+1;
      document.getElementById("samary3").textContent=hikiwake;
    } else if (result === RSP_RESULT_CODE.WIN) {
      $("#result").text("You win!");
      var info=document.getElementById("senreki");
      var textNode=document.createTextNode("勝利\n");
      info.appendChild(textNode);
      kati=kati+1;
      document.getElementById("samary1").textContent=kati;
    } else {
      $("#result").text("You lose!");
      var info=document.getElementById("senreki");
      var textNode=document.createTextNode("負け\n");
      info.appendChild(textNode);
      make=make+1;
      document.getElementById("samary2").textContent=make;
    }
  }
});

function b(){
  document.getElementById("text1").style.display = "none";
}

function a(){
  document.getElementById("text1").style.display = "block";
}
