//В этом задании в нашу функцию testDateTime передаются две строки вида "03 November 2017 04:17".
//Вам нужно превратить строки в даты, сравнить их. Для той, что больше получить день недели и вернуть его из функции.

//Название дня недели должно быть по-русски, с большой буквы, например: "Понедельник".

function testDateTime(a, b) {
  var myDate = new Date();
  

  if (+Date.parse(a) > +Date.parse(b))
    myDate.setTime(Date.parse(a));
  else 
    myDate.setTime(Date.parse(b));

  switch(myDate.getDay()){
    case 0: return 'Воскресенье';
    case 1: return 'Понедельник';
    case 2: return 'Вторник';
    case 3: return 'Среда';
    case 4: return 'Четверг';
    case 5: return 'Пятница';
    case 6: return 'Суббота';
  }
}

//console.log(testDateTime("19 October 1909 10:27", "28 March 1909 00:59")); //Вторник
