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

    var win=0;
    var lose=0;
    var draw=0;

    var myhand2;
    var bobhand2;
    var history2;


  $(".rsp-btn").click(function(){
    var result = judge(
      myHand($(this).attr("id")),
      bobHand()
      );
    showStart(start);
    showResult(result);
    showRecord(record);
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
    myhand2 = hand;
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
    bobhand2 = hand;
    return hand;
  }
  function judge(myHand, otherHand) {
    var result;
    if (myHand === otherHand) {
      result = RSP_RESULT_CODE.DRAW;
      draw++;
    } else if ((myHand === HAND_TYPE.ROCK && otherHand === HAND_TYPE.SCISSORS) || (myHand === HAND_TYPE.SCISSORS && otherHand === HAND_TYPE.PAPER) || (myHand === HAND_TYPE.PAPER && otherHand === HAND_TYPE.ROCK)) {
      result = RSP_RESULT_CODE.WIN;
      win++;
    }else {
      result = RSP_RESULT_CODE.LOSE;
      lose++;
    }
    history2 = result;
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
  }

  function showRecord(record){
    //$("#record").text("勝負分");
    $("#record").text(win + "勝" + lose + "負" + draw + "分");
  }

  function showHistory(history){
    $("#history").append("自分：" + myhand2 + "相手："+ bobhand2 +"勝敗：" + history2);
  }

  function showStart(start){
    $("#start").text("じゃんけん");
  }

  $("#button").click(function () {
    $("li").toggle();
  });

});
