(function(w, _, Vue){
  'use strict';

  new Vue({
    el: '#rsp',
    data: {
      screen: 'opening',
      isShowHands: false,
      isShowDescription: false,
      
      myHand: 'rock',
      bobHand: 'rock',
      strategy: 'standard',
      result: '引き分け',
      total: { win: 0, lose: 0, draw: 0},
      histories: []
    },
    methods: {
      // じゃんけん
      execute: function (type) {
        this.$data.myHand = type;
        this.changeBobHand(w.JankenStrategy[this.$data.strategy]);
        this.judge();
        this.addHistory(this.$data.myHand, this.$data.bobHand, this.$data.result);
      },
      // ボブの選択変更
      changeBobHand: function(strategy) {
        this.$data.bobHand = strategy(_.clone(this.$data.histories));
      },
      // 勝利判定
      judge: function() {
        var my = this.$data.myHand;
        var bob = this.$data.bobHand;
        if (my === bob) {
          this.$data.result = '引き分け';
          this.$data.total.draw++;
        } else if (
          (my === 'rock' && bob === 'scissors')
            || (my === 'scissors' && bob === 'paper')
            || (my === 'paper' && bob === 'rock')
        ) {
          this.$data.result = '勝ち';
          this.$data.total.win++;
        } else {
          this.$data.result = '負け';
          this.$data.total.lose++;
        }
      },
      // 履歴追加
      addHistory: function(my, bob, result) {
        var history = {
          my: my,
          bob: bob,
          result: result
        };
        this.$data.histories.unshift(history);
      },
      // 履歴表示色決定
      resultColor: function(result) {
        if (result === '勝ち') {
          return 'blue';
        } else if (result === '負け') {
          return 'red';
        } else {
          return 'gray';
        }
      }
    }
  });
})(window, _, Vue);
