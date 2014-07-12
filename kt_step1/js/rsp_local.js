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
  var HAND_NAME = {
    0: "ROCK",
    1: "SCISSORS",
    2: "PAPER"
  };

  var summary = {
    win: 0,
    lose: 0,
    draw: 0
  };

  $("#show-btn").click(function() {
    $(".nav-list").toggle();
  });

  $(".rsp-btn").click(function(){
    var bob = bobHand();
    var my = myHand($(this).attr("id"));
    
    var result = judge(my, bob);

    addHistory(my, bob, result);
    showResult(result);
  });

  function test() {
    console.log('test');
  }

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
      summary.draw++;
    } else if ((myHand === HAND_TYPE.ROCK && otherHand === HAND_TYPE.SCISSORS) || (myHand === HAND_TYPE.SCISSORS && otherHand === HAND_TYPE.PAPER) || (myHand === HAND_TYPE.PAPER && otherHand === HAND_TYPE.ROCK)) {
      result = RSP_RESULT_CODE.WIN;
      summary.win++;
    }else {
      result = RSP_RESULT_CODE.LOSE;
      summary.lose++;
    }
    return result;
  }

  function addHistory(myHand, bobHand, result) {
    $("#history").append("<li>自分の手: " + HAND_NAME[myHand] + " 相手の手: " + HAND_NAME[bobHand] + "</li>");
  }

  function showResult(result) {
    $("#summary").text(summary.win + "勝" + summary.lose + "敗" + summary.draw + "分け");
    
    if (result === RSP_RESULT_CODE.DRAW) {
      $("#result").text("draw.");
    } else if (result === RSP_RESULT_CODE.WIN) {
      $("#result").text("You win!");
    } else {
      $("#result").text("You lose!");
    }
    
  }
});
