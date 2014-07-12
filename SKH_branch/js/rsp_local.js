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
    var CHARACTER_CODE = {
    BOB : 0,
    TOM : 1,
    CARRY : 2,
  };

    var CHARACTER_WEIGHT = {
    BOB_WEIGHT : 7,
    TOM_WEIGHT : 5,
    CARRY_WEIGHT : 3,
  };

  var draw = 0;
  var win = 0;
  var lose = 0;

  var user = 0;

  var hand_f = 0;

  $(".start").click(function(){
    bobHand();
  });

  $(".rsp-btn").click(function(){
    var result = judge(
      myHand($(this).attr("id")),
      finalHand()
      );
    showResult(result);
    var seiseki;
    showResult(seiseki);
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
      $("#bobrspimg").attr("src", "img/rock_r.png");
    } else if (hand === HAND_TYPE.SCISSORS) {
      $("#bobrspimg").attr("src", "img/scissors_r.png");
    } else {
      $("#bobrspimg").attr("src", "img/paper_r.png");
    }
    hand_f = hand;
    //return hand;
  }

    function finalHand() {
      var x = Math.floor(Math.random() * 9) + 1;
      if (user === CHARACTER_CODE.BOB) {
        if (x > CHARACTER_WEIGHT.BOB_WEIGHT) {
                var tempHand = bobHand();
          while(hand_f === tempHand){
            tempHand = bobHand();
          }
          hand_f = tempHand;
        }
      } else if (user === CHARACTER_CODE.TOM) {
        if (x > CHARACTER_WEIGHT.TOM_WEIGHT){
                var tempHand = bobHand();
          while(hand_f === tempHand){
            tempHand = bobHand();
          }
          hand_f = tempHand;
        }
      } else {
        if(x > CHARACTER_WEIGHT.CARRY_WEIGHT){
                var tempHand = bobHand();
          while(hand_f === tempHand){
            tempHand = bobHand();
          }
          hand_f = tempHand;
        }
        }

    if (hand_f === HAND_TYPE.ROCK) {
      $("#bobrspimg").attr("src", "img/rock.png");
    } else if (hand_f === HAND_TYPE.SCISSORS) {
      $("#bobrspimg").attr("src", "img/scissors.png");
    } else {
      $("#bobrspimg").attr("src", "img/paper.png");
    }
    return hand_f;
  }

  function judge(myHand, otherHand) {
    var result;
    if (myHand === otherHand) {
      result = RSP_RESULT_CODE.DRAW;
      draw++;
    } else if ((myHand == HAND_TYPE.ROCK && otherHand == HAND_TYPE.SCISSORS) || (myHand == HAND_TYPE.SCISSORS && otherHand == HAND_TYPE.PAPER) || (myHand == HAND_TYPE.PAPER && otherHand === HAND_TYPE.ROCK)) {
      result = RSP_RESULT_CODE.WIN;
      win++;
    }else {
      result = RSP_RESULT_CODE.LOSE;
      lose++;
    }
    return result;
  }
  function showResult(result) {
    if (result == RSP_RESULT_CODE.DRAW) {
      $("#result").text("draw.");
    } else if (result == RSP_RESULT_CODE.WIN) {
      $("#result").text("You win!");
    } else {
      $("#result").text("You lose!");
    }
    $("#seiseki").text("戦績サマリー"+ win +"勝" + lose +"敗" + draw+ "分");
  }
});
