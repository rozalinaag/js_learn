let calculator = {
    read(){
        this.a = +prompt('Введите значение а: ', 1);
        this.b = +prompt('Введите значение и: ', 1);
    },
    sum(){
        return (this.a + this.b);
    },
    mul(){
        return (this.a * this.b);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

  console.log('fhdjdska');
