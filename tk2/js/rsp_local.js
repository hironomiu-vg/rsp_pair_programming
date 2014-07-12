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
  var RESULT_NAME = {
    0: "DRAW",
    1: "WIN",
    2: "LOSE"
  }

  var summary = {
    win: 0,
    lose: 0,
    draw: 0
  };

   var wincount = 0;

  $("#start-btn").click(function() {
    $("#intro").css("visibility", "visible");
    $(this).css("display", "none");
  });
    
  $("#show-btn").click(function() {
    $(".nav-list").toggle();
  });

  $("#restart-btn").click(function() {
    $("#intro").css("visibility", "visible");
    $("#content").css("visibility", "hidden");
    $(this).css("visibility", "hidden");
  });

  $(".rsp-btn").click(function(){
    var bob = bobHand();
    var my = myHand($(this).attr("id"));
    
    var result = judge(my, bob);
    $("#content").css("visibility", "visible");
    $("#intro").css("visibility", "hidden");
    $("#restart-btn").css("visibility", "visible");
    addHistory(my, bob, result);
    showResult(result);
    showBijyo(wincount);
    // $("#brabijyo").css("display", "none");
    // $("#0").css("display", "inline");
  });

  function showBijyo(wincount) {
    var bofore_count = wincount - 1
    var before = "#brabijo" + beforecount;
    var target = "#brabijo" + wincount;
    $(before).css("display", "none");
    $(target).css("display", "inline");
  }

  function test() {
    console.log('test');
  }

  function myHand(handType) {
    var hand;
    if (handType == "rock") {
      $("#myrspimg").attr("src", "img/mariko.jpg");
      hand = HAND_TYPE.ROCK;
    } else if (handType == "scissors") {
      $("#myrspimg").attr("src", "img/paru.jpg");
      hand = HAND_TYPE.SCISSORS;
    } else {
      $("#myrspimg").attr("src", "img/yuko.jpg");
      hand = HAND_TYPE.PAPER;
    }
    return hand;
  }
  function bobHand() {
    var hand = Math.floor(Math.random() * 3);
    if (hand === HAND_TYPE.ROCK) {
      $("#bobrspimg").attr("src", "img/mariko.jpg");
    } else if (hand === HAND_TYPE.SCISSORS) {
      $("#bobrspimg").attr("src", "img/paru.jpg");
    } else {
      $("#bobrspimg").attr("src", "img/yuko.jpg");
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
      wincount +=1;
    }else {
      result = RSP_RESULT_CODE.LOSE;
      summary.lose++;
    }
    return result;
  }

  function addHistory(myHand, bobHand, result) {
    $("#history").append("<li>自分の手: " + HAND_NAME[myHand] + " 相手の手: " + HAND_NAME[bobHand] + " 勝敗: " + RESULT_NAME[result] + "</li>");
  }

  function showResult(result) {
    $("#summary").text(summary.win + "勝" + summary.lose + "敗" + summary.draw + "分け");
    
    if (result === RSP_RESULT_CODE.DRAW) {
      $("#result").text("draw.");
      $("#result").css("color", "purple");

    } else if (result === RSP_RESULT_CODE.WIN) {
      $("#result").text("You win!");
      $("#result").css("color", "red");

    } else {
      $("#result").text("You lose!");
      $("#result").css("color", "blue");

    }
    
  }
});
