//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//То есть дефисы удаляются, а все слова после них получают заглавную букву.
//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';

function camelize(str){
  let mass_str = str.split('-');

  let result = mass_str.map(function(item, index, array) {
    if (index!=0){
      let item_0 = item[0].toUpperCase()
      item = item_0 + item.slice(1,);
      return item
    }
    else{
      return item;
    }
  });

  return result.join('');
}

console.log(camelize("-webkit-transition") );
