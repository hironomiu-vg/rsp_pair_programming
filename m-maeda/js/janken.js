(function(w, _){
  'use strict';

  w.JankenStrategy = {
    // 標準
    standard: function(){
      return _.sample(['rock', 'scissors', 'paper']);
    },
    // 頑固にグー
    rockOnly: function(){
      return 'rock';
    },
    // 私の1つ前の手をオウム返し
    oumu: function(histories) {
      if (histories.length > 0) {
        return histories.shift().my;
      } else {
        return 'rock';
      }
    },
    // 私の癖から勝つ手を選ぶ
    observation: function(histories) {
      if (histories.length > 0) {
        return _.chain(histories)
          .countBy(function(h){ return h.my; }).pairs().max(_.last).head()
          .value();
      } else {
        return 'rock';
      }
    }
  };
})(window, _);
