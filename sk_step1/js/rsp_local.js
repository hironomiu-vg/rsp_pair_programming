

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
  
  var win = 0;
  var lose = 0;
  var draw = 0;
  
  $(".toggle").click(function(){
  $(".del").toggle();
  });
  
 
  
  $(".start").click(function(){
  $("#jankentext").text("");
  $(".rsp-btn").hide();
  setInterval(function() {
  
  function showjanken(){
  $("#jankentext").text("じゃんけん");
  $(".rsp-btn").show();
  clearInterval()
  })
  
  
  });
  
  
  
  
  }
  
  
  

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
      draw = draw + 1;
    } else if ((myHand === HAND_TYPE.ROCK && otherHand === HAND_TYPE.SCISSORS) || (myHand === HAND_TYPE.SCISSORS && otherHand === HAND_TYPE.PAPER) || (myHand === HAND_TYPE.PAPER && otherHand === HAND_TYPE.ROCK)) {
      result = RSP_RESULT_CODE.WIN;
      win = win + 1;
    }else {
      result = RSP_RESULT_CODE.LOSE;
      lose = lose + 1;
    }
    return result;
  }
  function showResult(result) {
    if (result === RSP_RESULT_CODE.DRAW) {
      $("#result").text("draw.");
    } else if (result === RSP_RESULT_CODE.WIN) {
      $("#result").text("You win!");
    } else {
      $("#result").text("You lose!");
    }
    
    $("#t_result").text(win + "勝" + lose + "敗" + draw + "引き分け" );
  }
});