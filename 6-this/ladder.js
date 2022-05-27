//последовательный вызов функции через точку! возможен благдодаря return this;
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
    }
  };
  
ladder.up().up().down().showStep(); // 1
