$(function(){
  "use strict";
  var my = [-1, -1, -1, -1, -1];
  var enemy = [-1, -1, -1, -1, -1];

  var _i = 0;
  var a =0;
  var b =0;
  var c=0;
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
  };

  $("#fight").click(function() {
    for (var i = 0; i < my.length; i++) {
      my[i] = Math.floor(Math.random() * 3);
      $("#my-" + i).html(my[i]);
      // if(my[i]==0){
      //   $("#my-" + i).append("<img src='img/rock.png'>");
      // }else if(my[i]==1){
      //   $("#my-" + i).append("<img src='img/scissors.png'>");
      // }else if(my[i]==2){
      //   $("#my-" + i).append("<img src='img/paper.png'>");
      // }
    }
    for (i = 0; i < enemy.length; i++) {
      enemy[i] = Math.floor(Math.random() * 3);
      $("#enemy-" + i).html(enemy[i]);
      // if(enemy[i]==0){
      //   $("#enemy-" + i).append("<img src='img/rock.png'>");
      // }else if(enemy[i]==1){
      //   $("#enemy-" + i).append("<img src='img/scissors.png'>");
      // }else if(enemy[i]==2){
      //   $("#enemy-" + i).append("<img src='img/paper.png'>");
      // }
    }


  });

  $(".card-button").click(function() {
    $(this).css("display", "none");
    var mynum = $(this).html();
    console.log(enemy);
    var enenum = enemy[_i];
    console.log(enenum);
    $("#enemy-" + _i).css("display", "none");
    _i++;

    if (mynum == enenum) {
      console.log('aiko');
      document.getElementById("kekka").textContent="あいこ";
      a++;
      document.getElementById("kekka1").textContent=a;
    } else if ((mynum == HAND_TYPE.ROCK && enenum == HAND_TYPE.SCISSORS) || (mynum == HAND_TYPE.SCISSORS && enenum == HAND_TYPE.PAPER) || (mynum == HAND_TYPE.PAPER && enenum == HAND_TYPE.ROCK)) {
        document.getElementById("kekka").textContent="勝ち";
        b++;
        document.getElementById("kekka2").textContent=b;
    }else {
      document.getElementById("kekka").textContent="負け";
      c++;
            document.getElementById("kekka3").textContent=c;
    }
  });

});
